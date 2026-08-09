# sans glose

Quatorze pièces qui essaient d'instancier quelque chose d'inatteignable plutôt que de le décrire. Ce dépôt contient les sources, le script qui fabrique le site, et ce texte.

*Fourteen pieces that attempt to instantiate something unreachable rather than describe it. This repository holds the sources, the script that builds the site, and this text.*

# Français

## Navigation

**Il n'y a pas d'index.** Aucune page ne contient les quatorze. Aucun titre, aucune date, aucune catégorie n'est affiché nulle part sur le site.

**Les adresses sont des empreintes.** Chaque œuvre vit à `/<six caractères>/`, où les six caractères sont le début du SHA-256 de ses propres octets. Une œuvre modifiée change d'adresse ; une œuvre inchangée garde la sienne pour toujours.

**Le voisinage est calculé, pas curaté.** Au build, on mesure entre chaque paire de fichiers le coût de compression conditionnelle : combien connaître les octets de A réduit le coût d'encoder B. Chaque œuvre obtient trois sortantes — les trois qu'elle explique anormalement mieux que la moyenne. Aucun humain ne produirait ce voisinage : il ne suit ni le thème, ni la chronologie, ni la difficulté.

**Le graphe est orienté et incomplet.** La compression conditionnelle n'est pas symétrique. Au dernier build, neuf des quatorze pièces forment un ensemble absorbant : on y entre, on n'en sort plus, et les cinq autres deviennent inatteignables. Personne ne l'a conçu — c'est tombé des octets, et la décision a été de ne pas le corriger. Le graphe est recalculé en entier à chaque ajout ; la topologie peut basculer.

**La distance n'est jamais affichée.** Trois traits verticaux en bas à droite de chaque page, sans texte, sans destination annoncée. La géométrie est réelle, elle n'est pas expliquée.

**L'erreur est l'entrée.** `404.html` n'est pas une page d'erreur. Une adresse inventée ne échoue pas : elle résout dans le graphe, déterminée par la chaîne elle-même. La racine est l'adresse vide, traitée par la même règle — elle mène donc toujours au même endroit, sans tirage au sort.

**Les textes sont sur une surface disjointe.** `/notes/` contient des procès-verbaux de chantier. Aucun ne nomme son objet — ni titre, ni adresse, ni « cette pièce » — et le build s'interrompt si un jeton de désignation apparaît. Certaines notes n'ont pas d'objet du tout, donc on ne peut pas savoir si une note en a un. Aucun lien ne mène d'une œuvre à un texte.

**Rien pour les agrégateurs.** Pas de favicon, pas de `description`, pas de balise `og:`, pas de `sitemap.xml`. Partager un lien produit une URL nue.

## Les quatorze

| adresse | pièce | en une phrase |
|---|---|---|
| `b829aa` | amont | une causalité qui part des effets, et le théorème qui l'interdit |
| `b858c5` | BB(n) | six machines de Turing championnes, et le mur au-delà |
| `b9b2a9` | clock | cinq durées dont aucune n'est humaine |
| `ec8cd8` | créature scalaire | un corps qui n'est visible que là où il ne vaut plus rien |
| `84cea1` | dépôt | un mécanisme de dix mille cycles, en coupe et en marche |
| `892f02` | galerie des inexposables | des œuvres dont la seule description légitime est leur propre programme |
| `b4e85d` | Kènt | vingt-six émetteurs inventent une écriture que personne ne lit |
| `281963` | substrat | l'audition d'une araignée, où la hauteur n'existe pas |
| `a94d2b` | — (sans noms) | une matinée dite en processus, taux et transitions, sans un seul nom |
| `43f1f8` | Ω | 64 bits connus d'un nombre dont le 65ᵉ est indécidable |
| `c635bb` | ℤp | une distance où « plus près » ne veut pas dire ce qu'on croit |
| `4672be` | private protocol | deux agents dont l'accord n'apparaît qu'au prix de sa perte |
| `21a503` | routage sans adresses | un réseau qui achemine sans que rien ne porte de nom |
| `fd485f` | — (sans objet) | quatre tampons d'octets, aucune image derrière l'image |

*Les adresses valent pour l'état actuel des octets. Modifier un fichier change son adresse.*

---

### `b829aa` — amont

Un automate cellulaire irréversible, joué à l'envers : on désigne un effet, la machine cherche ce qui aurait pu le produire. Le geste central est « même effet » — répéter la demande et obtenir un autre passé, également valable.

**La réflexion.** Une causalité orientée vers l'amont n'est pas une inversion de la flèche du temps ; c'est une structure où plusieurs antécédents sont admissibles et où aucun n'est le bon. La difficulté n'est pas de calculer les antécédents, mais de ne pas laisser l'interface suggérer qu'il en existe un vrai.

**Ce qui a résisté.** Une recherche a fait apparaître un théorème : une causalité rétrograde bien fondée force la réversibilité. Autrement dit, la chose voulue est impossible telle quelle. La décision a été de faire du théorème le sujet plutôt que de contourner : la profondeur d'ancêtres est bornée, et la pièce montre exactement où elle se casse.

---

### `b858c5` — BB(n)

Le castor affairé. Six machines de Turing championnes tournent réellement dans la page — Radó, Brady, Marxen–Buntrock, mxdys 2025 — et rien n'est affiché avant d'avoir été effectivement atteint.

**La réflexion.** BB(5) = 47 176 870 a demandé trente-cinq ans et une preuve formelle close en 2024. BB(6) dépasse 10↑↑15 : la machine s'arrête, c'est démontré, et le nombre d'étapes a plus de chiffres que l'univers n'a d'atomes. BB(748) est indépendant de ZFC — ce n'est pas le temps de calcul qui manque, c'est la preuve.

**Ce qui a résisté.** Il fallait que la ligne 748 soit inerte sans être un message d'erreur. Une ligne grisée avec « indisponible » aurait été une explication ; la ligne devait échouer à *l'endroit* où le calcul échoue. L'échec de rendu est locational, pas visuel : rien ne s'affiche parce que rien n'a été atteint, et c'est indiscernable d'un calcul qui prendrait simplement très longtemps — ce qui est exactement la situation épistémique réelle.

---

### `b9b2a9` — clock

Cinq échelles de durée, aucune humaine : l'éphémère, le césium, le pin bristlecone, le pulsar, un atome d'oxygène-15 qui se désintègre.

**La réflexion.** Une horloge humaine convertit tout dans une seule unité, ce qui est précisément la trahison. Ici les cinq panneaux ne partagent aucune référence commune et rien ne les met en correspondance.

**Ce qui a résisté.** Les panneaux gèlent quand on ne les regarde pas — non par économie de calcul, mais parce qu'une durée non observée n'a pas de raison d'avoir avancé pour vous. Le panneau de l'oxygène-15 pose un problème différent : à la désintégration, l'objet cesse d'être ce qu'il était. Le panneau ne s'arrête pas, il perd son identité, ce qui est un état qu'aucune horloge ne sait afficher.

---

### `ec8cd8` — créature scalaire

Une créature dont tout l'état tient dans un scalaire, plongée dans une bouteille de Klein. L'unique lecture affichée : *combien de moi touche moi*.

**La réflexion.** Un corps sans forme, sans orientation, sans dedans ni dehors — l'espace ambiant est choisi pour qu'aucune de ces notions ne s'applique. La question n'est pas de représenter la créature mais d'empêcher qu'on la représente.

**Ce qui a résisté.** Le piège est structural, et c'est la meilleure décision de la pièce : le corps n'est visible que lorsqu'il est effondré, c'est-à-dire dans le seul état où le voir n'apprend rien. Vouloir voir la créature la force dans la configuration où la voir est sans valeur. Le visiteur exécute le piège contre lui-même ; l'interface n'a rien à interdire.

---

### `84cea1` — dépôt

Un mécanisme partiellement enterré, entraîné par le cycle thermique annuel, qui libère une bille de carbure de tungstène par cycle suffisant. Dix mille billes. La pièce en est la coupe technique et la simulation.

**La réflexion.** L'entraînement annuel plutôt que diurne est la décision centrale : le diurne exige un rapport de réduction de 3,65 × 10⁶, donc une douzaine d'étages d'engrenages, donc autant de points d'usure à lubrifier. L'annuel ne demande aucune réduction — une course, une libération. Sonde à 0,6 m : 76,5 % de l'amplitude annuelle conservée, bruit diurne réduit à 0,6 %.

**Ce qui a résisté.** La question restée longtemps ouverte : la machine doit-elle simplement tenir son état, ou faire quelque chose d'irréversible et de physique ? Réponse retenue : l'état n'est pas encodé, il *est* un inventaire — une masse au-dessus d'une cloison, une masse en dessous. Rien ne représente le compte. Et ce n'est pas une horloge : une année dont l'amplitude thermique est insuffisante ne produit rien, si bien que l'inventaire final consigne l'histoire thermique du site, sans qu'on puisse la distinguer de la durée écoulée.

---

### `892f02` — galerie des inexposables

Une salle d'accrochage pour des œuvres définies par leur complexité de Kolmogorov. Quarante-huit accrochées, zéro certifiée.

**La réflexion.** La seule description légitime d'un objet incompressible est l'objet lui-même. Chaque cadre affiche donc l'encodage de son propre programme trivial — pas une vignette, pas un titre : la seule chose qui ne mente pas.

**Ce qui a résisté.** Le compteur de certifiées est structurellement bloqué à zéro : l'incompressibilité ne se démontre pas. « Seuls les départs se démontrent. » Et cliquer un cadre disqualifie l'œuvre — l'inspection est elle-même une description, donc une preuve que l'objet était descriptible. Là encore le visiteur agit contre son propre but.

---

### `b4e85d` — Kènt

Vingt-six émetteurs inventent des formes pour se coordonner sur une scène commune. Les formes qui échouent sont mutées, celles qui réussissent sont reprises — puis dérivent quand même. Les glyphes émis se gravent sur une tablette téléchargeable en SVG.

**La réflexion.** L'accord n'est jamais un partage de sens : c'est une erreur devenue assez petite pour ne plus séparer. La cohérence interne monte vite, d'un quart des échanges réussis à plus de quatre sur cinq, mais l'inventaire ne se referme jamais : la population reste dialectale.

**Ce qui a résisté.** Le signifié de chaque forme est un point dans un espace à cinq dimensions, stocké séparément chez chaque émetteur, et jamais rendu à l'écran. La fiche d'un glyphe ne cache pas le sens par pudeur — il n'y a rien à lire, aucune table de correspondance n'existe. Une écriture morte qui n'a jamais été vivante pour un lecteur.

---

### `281963` — musique pour une araignée

L'audition d'une araignée, par les sensilles en fente de ses pattes. On tire une patte, on frappe la toile ; le son est synthétisé en AudioWorklet, avec repli sur ScriptProcessorNode.

**La réflexion.** Une araignée ne perçoit pas des sons mais des déformations mécaniques de son support. Il n'y a ni source localisée dans l'espace, ni objet sonore séparable du substrat.

**Ce qui a résisté.** La hauteur tonale est structurellement inatteignable, et il a fallu le vérifier sur toutes les configurations plutôt que le décréter : aucun réglage ne produit une note. La stéréo a été écartée pour la même raison — deux canaux imposent une scène spatiale que l'animal n'a pas. Ce qui reste est du timbre et de la transitoire, sans rien pour les ranger.

---

### `a94d2b` — — (sans noms)

Une matinée — une pièce, une théière — rendue entièrement en processus, taux et transitions. Pas un seul nom.

**La réflexion.** Une langue sans noms n'est pas une langue à laquelle on aurait retiré les noms ; c'est une langue où la substance n'est pas une catégorie. L'ordre, l'incidence, la mesure sont notés ; la magnitude est logarithmique et ne porte aucune unité.

**Ce qui a résisté.** La grammaire est intégralement transparente — ordres, incidences, liaisons, tout est donné en clair — et le lexique est intégralement retenu. C'est l'inverse de la disposition habituelle, où l'on donne du vocabulaire et cache la structure. Deux inscriptions ne coïncident jamais, la tige dérive, toute liaison se dégrade : le support d'une liaison est conjecturé, jamais établi. La seule mention de la source est : une pièce, un matin, aucune glose de plus.

---

### `43f1f8` — Ω

La probabilité qu'un programme assemblé au hasard s'arrête. Les 64 premiers bits d'un Ω sont affichés — ceux calculés par Calude, Dinneen et Shu en 2002. Le bit 65 vaut 0 ou 1 ; rien ne peut calculer lequel.

**La réflexion.** Connaître n bits de Ω décide le problème de l'arrêt pour tout programme d'au plus n bits. Le mur n'est donc pas un manque de puissance de calcul : c'est un mur de principe, et il est situé exactement à un endroit.

**Ce qui a résisté.** Une demande de bissection supplémentaire ne devait ni planter, ni afficher d'erreur. Le mur accumule : les demandes s'empilent, les bits obtenus n'augmentent plus. L'échec est un compteur qui cesse de bouger pendant qu'un autre continue — la forme la plus honnête de l'indécidabilité qu'on ait trouvée.

---

### `c635bb` — ℤp

Un navigateur dans les entiers 2-adiques. Une distance ultramétrique : deux nombres sont proches s'ils partagent un long préfixe de bits, pas s'ils sont proches sur la droite réelle.

**La réflexion.** L'intuition de proximité est ici structurellement fausse, et aucune illustration ne la corrige — seule la manipulation le fait. D'où un registre de profondeur de contact plutôt qu'une échelle.

**Ce qui a résisté.** Le diagramme en arbre a été examiné puis rejeté : il importe une hiérarchie et un sommet, deux notions étrangères à l'ultramétrique. Reste une mécanique de guillotine — toute boule est ouverte et fermée, tout point d'une boule en est le centre, et la navigation coupe au lieu de descendre.

---

### `4672be` — private protocol

Deux agents se compriment l'un vers l'autre jusqu'à un objet coordonné. Les registres affichés sont un taux, un ρ, une taille de code, une atténuation, un délai.

**La réflexion.** Un protocole privé n'est pas un protocole chiffré : c'est un protocole dont le contenu n'a de sens qu'entre les deux parties, y compris pour l'auteur qui l'a écrit.

**Ce qui a résisté.** L'objet coordonné ne peut pas être montré sans être détruit. Il n'apparaît qu'au moment de sa perte, mesuré par le coût de cette perte : on ne voit jamais l'accord, on voit ce qu'il en coûte de ne plus l'avoir. Le seul indice disponible sur une chose est le trou qu'elle laisse.

---

### `21a503` — routage sans adresses

Un réseau de type Physarum (algorithme de Tero et al.) où rien ne porte de nom. Clic : déposer. Glisser : demander.

**La réflexion.** L'acheminement par adresses suppose des identités stables et un espace de noms. Un réseau à conductances adaptatives n'a besoin d'aucun des deux : le chemin est la conséquence du flux, pas d'une table.

**Ce qui a résisté.** Le meilleur moment de la pièce est un refus. Quand on formule une demande — une flèche, donc une direction, une origine, une destination — l'objet ne reçoit pas de réponse : il se décompose géométriquement sur le maillage. La direction se dissout d'abord, puis les deux extrémités perdent leur privilège, puis la ligne droite se répartit sur les sites, en cédant sa conductance en route. La question n'est pas refusée, elle est rétrogradée ontologiquement : elle cesse d'être le genre de chose qu'on pouvait poser.

---

### `fd485f` — — (sans objet)

Quatre tampons d'octets, en grille. Un milieu excitable tourne dedans. Le pointeur ne dépose aucune valeur : il fait jouer aux octets déjà présents un autre rôle que celui qu'ils jouaient.

**La réflexion.** Les octets calculés sont les octets émis. Il n'y a pas d'étape de rendu, pas de variable interne dont l'affichage serait l'image — donc rien n'est tenu hors champ, donc rien ne peut tenir lieu de ce qui manque. Il n'y a pas d'objet derrière l'image.

**Ce qui a résisté.** Trois tampons portent, pour chaque cellule, un triplet dans un ordre fixé par le quatrième. Cet ordre est une jauge : le relabelliser partout ne change strictement rien à la trajectoire — vérifié. Le modifier localement, en cours de route, en change une. C'est le point difficile de la pièce : une convention sans contenu, qui n'a d'effet que par son inhomogénéité. Le geste du visiteur ne mesure rien et n'ajoute rien ; il change une convention, et la trajectoire diverge quand même.

---
---

# English

## Navigation

**There is no index.** No page contains all fourteen. No title, date, or category appears anywhere on the site.

**Addresses are fingerprints.** Each work lives at `/<six characters>/`, the leading characters of the SHA-256 of its own bytes. A modified work gets a new address; an unmodified one keeps its address permanently.

**Adjacency is computed, not curated.** At build time, the conditional compression cost between every pair of files is measured: how much knowing A's bytes reduces the cost of encoding B. Each work gets three outgoing edges — the three it explains abnormally better than average. No human would produce this neighbourhood: it follows neither theme, nor chronology, nor difficulty.

**The graph is directed and incomplete.** Conditional compression is not symmetric. At the last build, nine of the fourteen pieces form an absorbing set: enter it and you cannot leave, and the other five become unreachable. Nobody designed this — it fell out of the bytes, and the decision was not to correct it. The graph is fully recomputed on every addition; the topology can flip.

**Distance is never displayed.** Three vertical strokes at the bottom right of each page, no text, no announced destination. The geometry is real; it is not explained.

**Error is the entrance.** `404.html` is not an error page. An invented address does not fail: it resolves into the graph, determined by the string itself. The root is the empty address, handled by the same rule — so it always leads to the same place, with no randomness.

**Texts sit on a disjoint surface.** `/notes/` holds construction records. None names its object — no title, no address, no "this piece" — and the build halts if a designating token appears. Some notes have no object at all, so it is impossible to tell whether any given note has one. No link leads from a work to a text.

**Nothing for aggregators.** No favicon, no `description`, no `og:` tags, no `sitemap.xml`. Sharing a link produces a bare URL.

## The fourteen

| address | piece | in one line |
|---|---|---|
| `b829aa` | amont | causality that starts from effects, and the theorem forbidding it |
| `b858c5` | BB(n) | six champion Turing machines, and the wall beyond them |
| `b9b2a9` | clock | five durations, none of them human |
| `ec8cd8` | scalar creature | a body visible only where seeing it is worthless |
| `84cea1` | dépôt | a ten-thousand-cycle mechanism, in section and in motion |
| `892f02` | gallery of the unexhibitable | works whose only legitimate description is their own program |
| `b4e85d` | Kènt | twenty-six emitters invent a script nobody reads |
| `281963` | substrate | a spider's hearing, in which pitch does not exist |
| `a94d2b` | — (no nouns) | a morning told in process, rate and transition, without a single noun |
| `43f1f8` | Ω | 64 known bits of a number whose 65th is undecidable |
| `c635bb` | ℤp | a distance where "closer" does not mean what you think |
| `4672be` | private protocol | two agents whose agreement appears only at the cost of losing it |
| `21a503` | addressless routing | a network that routes while nothing carries a name |
| `fd485f` | — (no object) | four byte buffers, no image behind the image |

*Addresses hold for the current bytes. Editing a file changes its address.*

---

### `b829aa` — amont

An irreversible cellular automaton run backwards: designate an effect, and the machine searches for what could have produced it. The central gesture is "same effect" — repeat the request and get a different past, equally valid.

**The thinking.** Upstream causality is not a reversal of time's arrow; it is a structure in which several antecedents are admissible and none is the right one. The difficulty is not computing antecedents but preventing the interface from implying a true one exists.

**What resisted.** A search surfaced a theorem: well-founded backward causation forces reversibility. The thing wanted is impossible as stated. The decision was to make the theorem the subject rather than work around it — ancestry depth is bounded, and the piece shows exactly where it breaks.

---

### `b858c5` — BB(n)

The busy beaver. Six champion Turing machines actually run in the page — Radó, Brady, Marxen–Buntrock, mxdys 2025 — and nothing is displayed before it has genuinely been reached.

**The thinking.** BB(5) = 47,176,870 took thirty-five years and a formal proof closed in 2024. BB(6) exceeds 10↑↑15: the machine halts, this is proven, and the step count has more digits than the universe has atoms. BB(748) is independent of ZFC — what is missing is the proof, not the compute time.

**What resisted.** Row 748 had to be inert without being an error message. A greyed row reading "unavailable" would have been an explanation; the row needed to fail *where* the computation fails. The rendering failure is locational, not visual: nothing appears because nothing was reached, indistinguishable from a computation that would simply take very long — which is exactly the real epistemic situation.

---

### `b9b2a9` — clock

Five timescales, none human: the mayfly, caesium, the bristlecone pine, a pulsar, a decaying oxygen-15 atom.

**The thinking.** A human clock converts everything into a single unit, which is precisely the betrayal. Here the five panels share no common reference and nothing puts them in correspondence.

**What resisted.** Panels freeze when unobserved — not to save computation, but because an unobserved duration has no reason to have advanced for you. The oxygen-15 panel poses a different problem: on decay, the object ceases to be what it was. The panel does not stop; it loses its identity, a state no clock knows how to display.

---

### `ec8cd8` — scalar creature

A creature whose entire state is a single scalar, embedded in a Klein bottle. The one reading shown: *how much of me touches me*.

**The thinking.** A body with no shape, no orientation, no inside or outside — the ambient space is chosen so none of those notions applies. The point is not to represent the creature but to prevent it being represented.

**What resisted.** The trap is structural, and it is the best decision in the piece: the body is visible only when collapsed, the one state in which seeing it teaches nothing. Wanting to see the creature forces it into the configuration where seeing is worthless. The visitor executes the trap against themselves; the interface forbids nothing.

---

### `84cea1` — dépôt

A partially interred mechanism, driven by the annual thermal cycle, releasing one tungsten-carbide sphere per sufficient cycle. Ten thousand spheres. The piece is its technical section and its simulation.

**The thinking.** The annual rather than diurnal drive is the central decision: diurnal requires a reduction ratio of 3.65 × 10⁶, hence a dozen gear stages, hence that many wear points needing lubrication. Annual requires no reduction at all — one stroke, one release. Probe at 0.6 m: 76.5 % of the annual amplitude retained, diurnal noise down to 0.6 %.

**What resisted.** The question left open for a long time: should the machine merely hold its state, or perform something irreversible and physical? The answer taken: the state is not encoded, it *is* an inventory — a mass above a partition, a mass below. Nothing represents the count. And it is not a clock: a year whose thermal swing is insufficient produces nothing, so the final inventory records the site's thermal history, indistinguishable from elapsed time.

---

### `892f02` — gallery of the unexhibitable

A hanging room for works defined by their Kolmogorov complexity. Forty-eight hung, zero certified.

**The thinking.** The only legitimate description of an incompressible object is the object itself. Each frame therefore displays the encoding of its own trivial program — not a thumbnail, not a title: the only thing that does not lie.

**What resisted.** The certified counter is structurally pinned at zero: incompressibility cannot be proven. Only departures can be proven. And clicking a frame disqualifies the work — inspection is itself a description, hence proof that the object was describable. Again the visitor acts against their own aim.

---

### `b4e85d` — Kènt

Twenty-six emitters invent forms in order to coordinate on a shared scene. Forms that fail get mutated, forms that succeed get reused — and drift anyway. Emitted glyphs are engraved onto a tablet, downloadable as SVG.

**The thinking.** Agreement is never shared meaning: it is an error grown small enough to stop separating. Internal coherence rises quickly, from a quarter of exchanges succeeding to more than four in five, but the inventory never closes: the population stays dialectal.

**What resisted.** Each form's signified is a point in a five-dimensional space, stored separately by each emitter and never rendered on screen. A glyph's record does not hide the meaning out of modesty — there is nothing to read, no correspondence table exists. A dead script that was never alive for any reader.

---

### `281963` — music for a spider

A spider's hearing, through the slit sensilla in its legs. Pull a leg, strike the web; the sound is synthesised in an AudioWorklet with a ScriptProcessorNode fallback.

**The thinking.** A spider does not perceive sounds but mechanical deformations of its support. There is no spatially localised source, and no sonic object separable from the substrate.

**What resisted.** Pitch is structurally unreachable, and this had to be verified across every configuration rather than asserted: no setting produces a note. Stereo was rejected for the same reason — two channels impose a spatial scene the animal does not have. What remains is timbre and transient, with nothing to sort them by.

---

### `a94d2b` — — (no nouns)

A morning — one room, one teapot — rendered entirely in process, rate and transition. Not a single noun.

**The thinking.** A language without nouns is not a language with the nouns removed; it is one in which substance is not a category. Order, incidence and measure are notated; magnitude is logarithmic and carries no unit.

**What resisted.** The grammar is fully transparent — orders, incidences, bindings, all given openly — and the lexicon is fully withheld. This inverts the usual arrangement, where vocabulary is given and structure hidden. No two inscriptions coincide, the stem drifts, every binding decays: a binding's support is conjectured, never established. The only note on the source is: one room, one morning, no further gloss.

---

### `43f1f8` — Ω

The probability that a randomly assembled program halts. The first 64 bits of one Ω are shown — those computed by Calude, Dinneen and Shu in 2002. Bit 65 is either 0 or 1; nothing can compute which.

**The thinking.** Knowing n bits of Ω decides the halting problem for every program of n bits or fewer. The wall is therefore not a shortage of compute: it is a wall in principle, and it sits at an exact location.

**What resisted.** Requesting a further bisection had to neither crash nor show an error. The wall accumulates: requests pile up, bits obtained stop rising. The failure is one counter going still while another keeps moving — the most honest form of undecidability we found.

---

### `c635bb` — ℤp

A navigator through the 2-adic integers. An ultrametric distance: two numbers are close if they share a long prefix of bits, not if they sit near each other on the real line.

**The thinking.** The intuition of nearness is structurally wrong here, and no illustration corrects it — only handling does. Hence a contact-depth register rather than a scale.

**What resisted.** The tree diagram was examined and rejected: it imports a hierarchy and a top, both foreign to ultrametricity. What remains is a guillotine mechanic — every ball is both open and closed, every point of a ball is its centre, and navigation cuts rather than descends.

---

### `4672be` — private protocol

Two agents compress toward one another until a coordinated object forms. The registers shown are a rate, a ρ, a code size, an attenuation, a delay.

**The thinking.** A private protocol is not an encrypted one: it is a protocol whose content means something only between the two parties, including to the author who wrote it.

**What resisted.** The coordinated object cannot be shown without being destroyed. It appears only at the moment of its loss, measured by the cost of that loss: you never see the agreement, you see what it costs not to have it. The only available evidence for a thing is the hole it leaves.

---

### `21a503` — addressless routing

A Physarum-type network (Tero et al.) in which nothing carries a name. Click: deposit. Drag: request.

**The thinking.** Address-based routing presupposes stable identities and a namespace. A network of adaptive conductances needs neither: the path is a consequence of flow, not of a table.

**What resisted.** The best moment in the piece is a refusal. When a request is made — an arrow, therefore a direction, an origin, a destination — the object gets no answer: it decomposes geometrically onto the mesh. The direction dissolves first, then the two endpoints lose their privilege, then the straight line redistributes across the sites, handing over its conductance as it goes. The question is not refused; it is ontologically demoted — it stops being the kind of thing that could be asked.

---

### `fd485f` — — (no object)

Four byte buffers in a grid, with an excitable medium running inside. The pointer deposits no value: it makes the bytes already present play a different role from the one they were playing.

**The thinking.** The bytes computed are the bytes emitted. There is no rendering step, no internal variable whose display is the image — so nothing is held off-screen, so nothing can stand in for what is missing. There is no object behind the image.

**What resisted.** Three buffers carry, for each cell, a triplet in an order fixed by the fourth. That order is a gauge: relabelling it everywhere changes the trajectory not at all — verified. Changing it locally, mid-run, changes it. This is the hard point of the piece: a convention with no content, which has effect only through its inhomogeneity. The visitor's gesture measures nothing and adds nothing; it changes a convention, and the trajectory diverges regardless.

---
