# mise en ligne

## github pages

1. dépôt public, pousser tout le contenu de ce dossier
2. Settings → Pages → Source : *Deploy from a branch* → branche `main`, dossier **`/docs`**
3. l'adresse est `https://<compte>.github.io/<dépôt>/`

**Le nom du dépôt doit correspondre à `--base`.** Si le dépôt ne s'appelle pas
`sansglose`, reconstruire avant de pousser :

    node build.js --base=/<nom-du-dépôt>/

## ajouter une œuvre

    cp nouvelle.html sources/
    node build.js --base=/<nom-du-dépôt>/
    git add -A && git commit -m . && git push

Rien d'autre. Pas de registre, pas de métadonnée à écrire.
L'empreinte de l'œuvre est son adresse ; les adresses déjà partagées ne bougent pas.
Le graphe, lui, est recalculé en entier : la topologie peut changer.

## ajouter un texte

Un fichier `.md` dans `notes/`. Le build s'interrompt si le texte contient un
jeton de désignation (nom de fichier source ou adresse). La liste surveillée est
dérivée automatiquement de `sources/` ; les exceptions sont dans `build.js`
(constantes `STOP` et `EXTRA`).

## domaine propre

    echo sansglose.org > docs/CNAME
    node build.js --base=/

DNS : `A` vers 185.199.108–111.153, ou `CNAME` vers `<compte>.github.io`.
Les adresses des œuvres ne changent pas.

## ce qui est volontairement absent

Pas de favicon, pas de `description`, pas de balise `og:` — partager un lien
produit une URL nue, sans vignette ni titre. Pas de `sitemap.xml`.
`404.html` n'est pas une page d'erreur : c'est l'entrée.
