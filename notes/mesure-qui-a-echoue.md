## mesure qui a échoué

Il fallait relier les pièces entre elles sans les classer. Toute rubrique — par thème, par date, par difficulté — est une taxinomie posée sur des objets qui n'en veulent pas. L'idée était donc de laisser la distance se calculer sur les octets eux-mêmes : combien connaître un fichier réduit-il le coût d'encoder un autre.

La première passe a échoué franchement.

Le coût conditionnel brut, rapporté à la taille de la cible, fait converger tout le corpus vers le plus petit fichier. Corrélation de 0,56 avec la taille de la cible. La raison est bête : le préambule partagé — doctype, appel de fontes, motifs de feuille de style — représente une fraction d'autant plus grande que le fichier est court. La mesure ne comparait pas les pièces, elle mesurait une manière d'écrire du HTML, puis récompensait la brièveté.

Deux corrections. On ne garde que le corps exécutable, préambule retiré. Et on standardise par colonne : la question n'est plus « quelle cible est facile à comprimer », mais « quelle source explique cette cible anormalement mieux que la moyenne ». La taille disparaît de l'équation.

---

Le graphe qui en sort n'a pas la forme attendue.

Il n'est pas fortement connexe. Un sous-ensemble de pièces forme un ensemble absorbant : on y entre, on n'en sort plus, et les autres deviennent définitivement inatteignables. Aucun chemin de retour n'existe, parce que le coût de compression conditionnelle n'est pas symétrique — savoir A aide à encoder B sans que savoir B aide autant à encoder A. La plupart des arêtes sont réciproques. Une minorité ne l'est pas, et cette minorité porte toute l'irréversibilité.

Personne n'a décidé ça. C'est tombé des octets. La décision a été de ne pas le corriger : figer un piège qu'on vient de découvrir pour le préserver, ce serait le curer, c'est-à-dire refaire à la main ce que le procédé servait à éviter. Le graphe est recalculé intégralement à chaque ajout. Le piège peut se dissoudre au prochain build, se scinder, s'inverser. La sortie de vérification dira ce qu'il en reste.

Le degré sortant, lui, reste à trois quel que soit le nombre de pièces. C'est la seule constante imposée de l'extérieur. À quatorze le graphe est dense ; à quarante il se fragmentera de lui-même, sans qu'on ait à le vouloir.

---

Reste ce texte, et ceux qui suivront.

Un texte devient glose au moment précis où il permet de parler d'une pièce sans l'avoir rencontrée. Le cartouche de musée ne complète pas le tableau : il le remplace, on repart avec une phrase et la phrase suffit. Le critère retenu est donc celui du remplaçable — ce qui donne au lecteur quelque chose à répéter est coupé, ce qui ne lui donne rien à répéter reste.

D'où la règle : un texte ne nomme jamais son objet. Ni adresse, ni titre, ni nom de fichier, ni « cette pièce ». Un texte qui ne peut pas désigner ne peut pas se substituer. La règle est vérifiée à la construction, pas tenue par discipline : le build s'interrompt si un jeton de désignation apparaît.

Ces textes ne sont pas datés et ne sont pas rangés dans leur ordre d'écriture. Une liste chronologique rétablirait la correspondance par simple comptage. Ils sont ordonnés par l'empreinte de leur propre contenu, qui ne transporte rien sur ce à quoi ils se rapportent.

Certains n'ont pas d'objet du tout : notes pour des choses qui résistent encore à tout support, et qui ne deviendront peut-être jamais rien. Elles sont indiscernables des autres. Le lecteur ne peut donc pas seulement ignorer à quelle pièce un texte se rapporte — il ne peut pas savoir s'il se rapporte à quelque chose.

Le prix est réel : beaucoup de rapprochements ne se feront pas. C'est le même prix que paie la racine en n'ayant pas d'index.
