# TP04 - Personnages célèbres

La page web que vous allez créer doit afficher des personnages célèbres.

Pour cela, 3 fichiers JSON ont été créés.
Chacun d'eux contient une liste de personnages identifiés par leur prénom et leur nom.
Un formulaire vous permet de choisir quels personnages afficher et comment les trier.

## Formulaire

Le formulaire contient les éléments suivants :

* 3 cases à cocher correspondant chacune à un fichier JSON;
* un ensemble de 2 boutons radios étiquetés "prénom" et "nom";
* 1 bouton pour mettre à jour les résultats.

Les cases à cocher servent à choisir quels groupes de personnages seront inclus dans les résultats.

Les boutons radio permettent de choisir si les résultats sont triés par nom ou par prénom.

## Résultats

* Les personnages sont affichés sous forme de tableau.
* La première ligne du tableau contiendra les en-têtes "Prénom" et "Nom".
* Dès que le bouton est cliqué et en attendant les résultat, le tableau est remplacé par un paragraphe indiquant "Chargement en cours...".
* S'il n'y a aucun résultat à afficher, le tableau est remplacé par un paragraphe "Pas de résultat".

## Comportement

* À chaque click sur le bouton de mise à jour, les fichiers JSON correspondant aux cases cochées sont chargés au moyen de l'API `Fetch`.
* Le contenu de chaque fichier est traité comme du JSON.
* Quand tous les fichiers sont chargés, leurs contenus sont concaténés.
* Quand les contenus sont concaténés, les personnages sont triés, selon le bouton radio choisi, par nom ou par prénom.
* Quand les personnages sont triés, le tableau des résultats est créé et affiché.

## Consignes

* Le script JavaScript sera lisible grâce notamment à :
  * une bonne indentation
  * un choix judicieux des noms de fonction et de variables
  * un bon découpage en fonctions
  * l'utilisation d'objets `Promise` ou des mots-clés `async` et `await`
* Une feuille de style permettra de donner à la page un style professionnel.
* Les codes HTML, CSS et JavaScript seront écrits chacun dans un fichier séparé.
* En cas d'erreur, un message clair sera écrit sur la console.
* Un serveur local Node.JS + express permettra de distribuer les fichiers statiques.
* Le serveur local affichera chaque requête HTTP sur sa console.
* Les dépendances Node.js seront enregistrées dans un fichier `package.json` ainsi que la commande pour démarrer le serveur local.
