#!/usr/bin/env node
"use strict";
/*
  build.js — reconstruit entièrement docs/ à partir de sources/ et notes/.
  Rien n'est conservé d'un build à l'autre : le graphe est une propriété
  du corpus à l'instant du build, pas un objet entretenu.

  usage :  node build.js [--base=/depot/]
           --base : préfixe d'URL servi par l'hébergeur.
                    GitHub Pages projet -> /nom-du-depot/
                    domaine propre      -> /
*/

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const crypto = require("crypto");

const ROOT = __dirname;
const SRC = path.join(ROOT, "sources");
const NOTES = path.join(ROOT, "notes");
const OUT = path.join(ROOT, "docs");

const arg = process.argv.slice(2).find(a => a.startsWith("--base="));
let BASE = arg ? arg.slice(7) : "/";
if (!BASE.startsWith("/")) BASE = "/" + BASE;
if (!BASE.endsWith("/")) BASE += "/";

const SORTIES = 3;          // degré sortant, constant quel que soit n
const GRAINE_LEN = 6;       // longueur de l'empreinte d'adresse

/* ------------------------------------------------------------------ */
/* 1. corpus                                                           */
/* ------------------------------------------------------------------ */

const fichiers = fs.readdirSync(SRC).filter(f => f.endsWith(".html")).sort();
if (fichiers.length < SORTIES + 1) {
  console.error("corpus trop petit pour un degré sortant de " + SORTIES);
  process.exit(1);
}
const octets = {};
for (const f of fichiers) octets[f] = fs.readFileSync(path.join(SRC, f));

const graine = {};
for (const f of fichiers) {
  graine[f] = crypto.createHash("sha256").update(octets[f]).digest("hex").slice(0, GRAINE_LEN);
}
{
  const vues = new Map();
  for (const f of fichiers) {
    if (vues.has(graine[f])) {
      console.error("collision d'empreinte : " + f + " / " + vues.get(graine[f]));
      process.exit(1);
    }
    vues.set(graine[f], f);
  }
}

/* ------------------------------------------------------------------ */
/* 2. graphe orienté par compression conditionnelle                    */
/*    corps exécutable seul : le préambule partagé (doctype, fontes,   */
/*    motifs css) mesurait la manière d'écrire, pas les œuvres.        */
/* ------------------------------------------------------------------ */

function corps(buf) {
  const s = buf.toString("utf8");
  const m = [...s.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(x => x[1]).join("\n");
  return Buffer.from(m.length ? m : s, "utf8");
}
const B = {};
for (const f of fichiers) B[f] = corps(octets[f]);

const OPT = { params: {
  [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
  [zlib.constants.BROTLI_PARAM_LGWIN]: 24
}};
const C = b => zlib.brotliCompressSync(b, OPT).length;

const c1 = {};
for (const f of fichiers) c1[f] = C(B[f]);
const c2 = {};
for (const a of fichiers) for (const b of fichiers) {
  if (a === b) continue;
  c2[a + "|" + b] = C(Buffer.concat([B[a], B[b]]));
}
// coût résiduel de b une fois a connu, rapporté au coût de b seul
const cond = (a, b) => (c2[a + "|" + b] - c1[a]) / c1[b];

// standardisation par colonne : retire l'effet « b est facile à comprimer ».
// sans elle, tout le corpus pointe vers le plus petit fichier.
const colonne = {};
for (const b of fichiers) {
  const v = fichiers.filter(a => a !== b).map(a => cond(a, b));
  const m = v.reduce((s, x) => s + x, 0) / v.length;
  const sd = Math.sqrt(v.reduce((s, x) => s + (x - m) * (x - m), 0) / v.length) || 1e-9;
  colonne[b] = { m, sd };
}
const z = (a, b) => (cond(a, b) - colonne[b].m) / colonne[b].sd;

const sortantes = {};
for (const a of fichiers) {
  sortantes[a] = fichiers.filter(b => b !== a)
    .map(b => [z(a, b), b])
    .sort((x, y) => x[0] - y[0])
    .slice(0, SORTIES)
    .map(x => x[1]);
}

/* ------------------------------------------------------------------ */
/* 3. résolution d'une adresse quelconque (racine et 404)              */
/* ------------------------------------------------------------------ */

// fnv-1a 32 bits — reproduite à l'identique côté client
function fnv1a(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h >>> 0;
}
const graines = fichiers.map(f => graine[f]);           // ordre = ordre des fichiers
const resoudre = s => graines[fnv1a(s) % graines.length];

/* ------------------------------------------------------------------ */
/* 4. sortie                                                           */
/* ------------------------------------------------------------------ */

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, ".nojekyll"), "");

// --- marques sortantes injectées dans chaque œuvre ---
// trois traits, aucun texte, aucune indication de destination.
// la couleur est décidée à l'exécution d'après le fond réel de la page :
// le corpus n'a pas de palette commune.
function marques(f) {
  const dest = sortantes[f].map(b => graine[b]);
  return `
<div id="sg-sorties" aria-hidden="true">${dest.map(g => `<a href="../${g}/"></a>`).join("")}</div>
<style>
#sg-sorties{position:fixed;right:20px;bottom:18px;z-index:2147483000;display:flex;gap:9px;line-height:0}
#sg-sorties a{display:block;width:1px;height:15px;background:currentColor;opacity:.34;cursor:pointer;
  transition:opacity .18s linear,height .18s linear}
#sg-sorties a:hover,#sg-sorties a:focus-visible{opacity:.85;height:21px;outline:none}
@media (pointer:coarse){#sg-sorties a{width:2px;height:26px;padding:8px 6px;background-clip:content-box}}
</style>
<script>(function(){var n=document.getElementById('sg-sorties');
function lum(el){var c=getComputedStyle(el).backgroundColor||'';var m=c.match(/[\\d.]+/g);
if(!m||m.length<3)return null;if(m.length>3&&parseFloat(m[3])<0.2)return null;
return (0.2126*m[0]+0.7152*m[1]+0.0722*m[2])/255;}
var l=lum(document.body);if(l===null)l=lum(document.documentElement);if(l===null)l=1;
n.style.color=l<0.5?'#ffffff':'#000000';})();</script>`;
}

for (const f of fichiers) {
  const dir = path.join(OUT, graine[f]);
  fs.mkdirSync(dir, { recursive: true });
  let html = octets[f].toString("utf8");
  const bloc = marques(f);
  const i = html.toLowerCase().lastIndexOf("</body>");
  html = i === -1 ? html + bloc : html.slice(0, i) + bloc + "\n" + html.slice(i);
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

// --- résolveur : racine et 404 partagent le même fichier ---
// une adresse inconnue n'échoue pas, elle résout. l'adresse vide (la racine)
// est une adresse comme une autre, traitée par la même règle.
const resolveur = `<!DOCTYPE html>
<html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title> </title><meta name="robots" content="noindex">
<style>html,body{margin:0;height:100%;background:#f2f0e9}</style>
<script>
(function(){
var BASE=${JSON.stringify(BASE)};
var G=${JSON.stringify(graines)};
function fnv1a(s){var h=0x811c9dc5;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);
h=(h+((h<<1)+(h<<4)+(h<<7)+(h<<8)+(h<<24)))>>>0;}return h>>>0;}
var p=location.pathname;
if(p.indexOf(BASE)===0)p=p.slice(BASE.length);
p=p.replace(/^\\/+/,'').replace(/\\/+$/,'').replace(/index\\.html$/,'');
var cible=BASE+G[fnv1a(p)%G.length]+'/';
if(cible===location.pathname){document.documentElement.style.background='#f2f0e9';return;}
location.replace(cible);
})();
</script></head><body></body></html>`;
fs.writeFileSync(path.join(OUT, "index.html"), resolveur);
fs.writeFileSync(path.join(OUT, "404.html"), resolveur);

/* ------------------------------------------------------------------ */
/* 5. surface des notes — disjointe du graphe                          */
/*    aucun lien note -> œuvre déterminée. un texte ne désigne pas.    */
/* ------------------------------------------------------------------ */

const STOP = new Set(["sans", "pour", "une", "des", "page", "objet", "adresses", "avec", "dans", "cette"]);
const EXTRA = ["kent", "adic"];
const interdits = new Set(EXTRA);
for (const f of fichiers) {
  for (const t of f.replace(/\.html$/, "").split(/[^a-z0-9]+/i)) {
    const w = t.toLowerCase();
    if (w.length >= 5 && !STOP.has(w)) interdits.add(w);
  }
}
for (const g of graines) interdits.add(g);

function md2html(src) {
  const lignes = src.replace(/\r/g, "").split("\n");
  const out = [];
  let p = [];
  const vider = () => { if (p.length) { out.push("<p>" + p.join(" ") + "</p>"); p = []; } };
  for (const l of lignes) {
    const t = l.trim();
    if (!t) { vider(); continue; }
    const h = t.match(/^(#{1,3})\s+(.*)$/);
    if (h) { vider(); out.push("<h" + (h[1].length + 1) + ">" + inline(h[2]) + "</h" + (h[1].length + 1) + ">"); continue; }
    if (t === "---") { vider(); out.push("<hr>"); continue; }
    p.push(inline(t));
  }
  vider();
  return out.join("\n");
}
function inline(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

const CSS = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&display=swap" rel="stylesheet">
<style>
:root{--fond:#f2f0e9;--encre:#1b1a17;--gris:#8a8375;--trait:#d6d1c4}
*{box-sizing:border-box}
body{margin:0;background:var(--fond);color:var(--encre);
 font-family:'IBM Plex Mono',ui-monospace,monospace;font-weight:300;
 font-size:13px;line-height:1.85;padding:46px 26px 90px;-webkit-font-smoothing:antialiased}
main{max-width:600px;margin:0 auto}
h2{font-size:13px;font-weight:400;letter-spacing:.14em;margin:0 0 30px;text-transform:lowercase}
h3{font-size:11px;font-weight:400;letter-spacing:.14em;color:var(--gris);
 text-transform:uppercase;margin:38px 0 12px}
p{margin:0 0 16px}
hr{border:0;border-top:1px solid var(--trait);margin:34px 0}
code{font-size:12px;color:#5d574b}
ul.i{list-style:none;padding:0;margin:0}
ul.i li{padding:11px 0;border-bottom:1px solid var(--trait)}
ul.i a{color:var(--encre);text-decoration:none;letter-spacing:.05em}
ul.i a:hover{color:var(--gris)}
.sortie{display:block;width:1px;height:15px;background:var(--encre);opacity:.34;
 position:fixed;right:20px;bottom:18px;transition:opacity .18s,height .18s}
.sortie:hover{opacity:.85;height:21px}
</style>`;

const fnotes = fs.existsSync(NOTES) ? fs.readdirSync(NOTES).filter(f => f.endsWith(".md")) : [];
const notes = [];
const fautes = [];
for (const f of fnotes) {
  const brut = fs.readFileSync(path.join(NOTES, f), "utf8");
  const bas = brut.toLowerCase();
  const trouves = [...interdits].filter(w => new RegExp("\\b" + w + "\\b", "i").test(bas));
  if (trouves.length) fautes.push([f, trouves]);
  notes.push({
    nom: f.replace(/\.md$/, ""),
    brut,
    rang: crypto.createHash("sha256").update(brut).digest("hex")
  });
}
if (fautes.length) {
  console.error("\nDÉSIGNATION — build interrompu :");
  for (const [f, w] of fautes) console.error("  " + f + " → " + w.join(", "));
  console.error("un texte ne nomme pas son objet.\n");
  process.exit(1);
}

notes.sort((a, b) => a.rang < b.rang ? -1 : 1);   // ordre = empreinte du texte lui-même
fs.mkdirSync(path.join(OUT, "notes"), { recursive: true });
for (const n of notes) {
  const d = path.join(OUT, "notes", n.nom);
  fs.mkdirSync(d, { recursive: true });
  fs.writeFileSync(path.join(d, "index.html"),
    `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${n.nom}</title>${CSS}</head><body><main>
${md2html(n.brut)}
</main><a class="sortie" href="../../" aria-label=" "></a></body></html>`);
}
fs.writeFileSync(path.join(OUT, "notes", "index.html"),
  `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>notes</title>${CSS}</head><body><main>
<h2>notes</h2>
<ul class="i">${notes.map(n => `<li><a href="${n.nom}/">${n.nom.replace(/-/g, " ")}</a></li>`).join("")}</ul>
</main><a class="sortie" href="../" aria-label=" "></a></body></html>`);

/* ------------------------------------------------------------------ */
/* 6. vérification                                                     */
/* ------------------------------------------------------------------ */

const court = f => f.replace(/\.html$/, "");
const atteint = a => {
  const vu = new Set([a]), pile = [a];
  while (pile.length) { const x = pile.pop(); for (const y of sortantes[x]) if (!vu.has(y)) { vu.add(y); pile.push(y); } }
  return vu;
};
const entrant = {};
fichiers.forEach(f => entrant[f] = 0);
for (const a of fichiers) for (const b of sortantes[a]) entrant[b]++;
let rec = 0, tot = 0;
for (const a of fichiers) for (const b of sortantes[a]) { tot++; if (sortantes[b].includes(a)) rec++; }

console.log("\ncorpus " + fichiers.length + " œuvres · base " + BASE + " · degré sortant " + SORTIES);
console.log("notes " + notes.length + " · jetons de désignation surveillés " + interdits.size);
console.log("\nadresse   entrant  atteint   →");
for (const f of fichiers) {
  const r = atteint(f).size;
  console.log("  " + graine[f] + "  " + String(entrant[f]).padStart(4) + "  " +
    String(r).padStart(6) + "/" + fichiers.length + "   " +
    sortantes[f].map(b => graine[b]).join(" ") + "   " + court(f));
}
console.log("\narêtes réciproques " + rec + "/" + tot);
const orphelines = fichiers.filter(f => entrant[f] === 0);
console.log("sans entrante " + (orphelines.length ? orphelines.map(f => graine[f]).join(" ") : "aucune"));
const tailles = [...new Set(fichiers.map(f => atteint(f).size))].sort((a, b) => a - b);
if (tailles.length === 1 && tailles[0] === fichiers.length) {
  console.log("graphe fortement connexe — aucune composante absorbante ce build");
} else {
  console.log("composantes : atteignabilités distinctes = " + tailles.join(", "));
  const petits = fichiers.filter(f => atteint(f).size < fichiers.length);
  console.log("enfermées (" + petits.length + ") : " + petits.map(f => graine[f] + " " + court(f)).join(" · "));
}
console.log("\nracine → " + resoudre("") + "   (adresse vide)");
for (const s of ["x", "abc", "sansglose", "000000"]) console.log("« " + s + " » → " + resoudre(s));
console.log("");
