const p=require('puppeteer'),fs=require('fs'),http=require('http'),path=require('path');
const OUT=path.join(__dirname,'docs'), BASE='/sansglose/';
const MT={'.html':'text/html;charset=utf-8','.js':'text/javascript','.css':'text/css'};
const srv=http.createServer((req,res)=>{
  let u=decodeURI(req.url.split('?')[0]);
  if(!u.startsWith(BASE)){res.writeHead(404);return res.end();}
  let f=path.join(OUT,u.slice(BASE.length));
  if(f.endsWith('/'))f+='index.html';
  if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');
  if(!fs.existsSync(f)){ // imitation github pages : 404.html
    res.writeHead(404,{'content-type':'text/html;charset=utf-8'});
    return res.end(fs.readFileSync(path.join(OUT,'404.html')));
  }
  res.writeHead(200,{'content-type':MT[path.extname(f)]||'application/octet-stream'});
  res.end(fs.readFileSync(f));
});
(async()=>{
srv.listen(8099);
const b=await p.launch({args:['--no-sandbox','--disable-dev-shm-usage','--autoplay-policy=no-user-gesture-required']});
const graines=fs.readdirSync(OUT).filter(d=>/^[0-9a-f]{6}$/.test(d));
let ko=0;
for(const g of graines){
  const pg=await b.newPage();
  const errs=[];
  pg.on('pageerror',e=>errs.push(String(e).split('\n')[0]));
  pg.on('console',m=>{if(m.type()==='error'&&!/favicon/.test((m.location()&&m.location().url)||''))errs.push('console: '+m.text().slice(0,90));});
  await pg.goto('http://localhost:8099'+BASE+g+'/',{waitUntil:'networkidle2',timeout:25000}).catch(e=>errs.push('goto '+e.message));
  await new Promise(r=>setTimeout(r,1200));
  const r=await pg.evaluate(()=>{
    const n=document.getElementById('sg-sorties');
    if(!n)return{n:0};
    const a=[...n.querySelectorAll('a')];
    const rc=n.getBoundingClientRect();
    const el=document.elementFromPoint(rc.left+1,rc.top+8);
    return{n:a.length,color:getComputedStyle(n).color,
      dest:a.map(x=>x.getAttribute('href')),
      visible:rc.bottom<=innerHeight+1&&rc.right<=innerWidth+1&&rc.width>0,
      cliquable:!!el&&n.contains(el),
      bg:getComputedStyle(document.body).backgroundColor};
  });
  const bad=r.n!==3||!r.visible||!r.cliquable||errs.length;
  if(bad)ko++;
  console.log((bad?'KO ':'ok ')+g+'  marques:'+r.n+' couleur:'+(r.color||'-').replace(/\s/g,'')+
    ' fond:'+(r.bg||'-').replace(/\s/g,'')+' visible:'+r.visible+' cliquable:'+r.cliquable+
    (errs.length?'\n     erreurs: '+errs.slice(0,3).join(' | '):''));
  await pg.close();
}
// resolveur
for(const u of ['','xyz','notes-mal-tapees/','000000/']){
  const pg=await b.newPage();
  await pg.goto('http://localhost:8099'+BASE+u,{waitUntil:'networkidle2',timeout:25000}).catch(()=>{});
  await new Promise(r=>setTimeout(r,700));
  console.log('« '+u+' » -> '+pg.url().replace('http://localhost:8099'+BASE,''));
  await pg.close();
}
// notes
for(const u of ['notes/','notes/mesure-qui-a-echoue/']){
  const pg=await b.newPage();const errs=[];pg.on('pageerror',e=>errs.push(String(e)));
  await pg.goto('http://localhost:8099'+BASE+u,{waitUntil:'networkidle2',timeout:20000}).catch(e=>errs.push(e.message));
  const r=await pg.evaluate(()=>({liens:[...document.querySelectorAll('a')].map(a=>a.getAttribute('href')),
    txt:document.body.innerText.length}));
  console.log('ok '+u+'  liens:'+JSON.stringify(r.liens)+' caracteres:'+r.txt+(errs.length?' ERR '+errs[0]:''));
  await pg.close();
}
await b.close();srv.close();
console.log('\n'+(ko?ko+' œuvre(s) en défaut':'14/14 œuvres : marques présentes, visibles, cliquables, sans erreur'));
})();
