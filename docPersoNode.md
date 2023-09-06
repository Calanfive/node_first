Node JS

# script #
cacher la complexité + automatisation (CRON)

# version #
v18.17.0 = majeur, mineur, fix

différence dependencies / dev.dependencies 

npm install 
npm i
      -D
     --save-dev
exemple : npm install -D typescript = déplacer dans dev.dep

va créer une nouvelle ligne dans node-modules 

## pour reset ##
rm-rf node.modules = supprimer node modules + package.json
rm package.lock.json

## Création de dossier + initialisation node ##

mkdir qqch
npm init
npm install typescript

### Commandes argument ###

process.argv = tableau des arguments
process.argv.indexOf("--name") + 1 = recherche dans le tableau l'index de --name + affiche l'argument suivant
process.argv.includes("--help") = même recherche avec --help

### Commandes objet ###

interface IPersone {const p2={...p, age:12
                    name : string
                    age : number
                   }
const p:Ipersone= {name:"laforge", age:18}
p.name= #toto"

### Node.js: fs-extra ###

const fs = require('fs-extra')
=
import fs from 'fs-extra'

### variable d'environnement ###

commande env
touch .env
toujours le placer dans le git ignore


# API #

API = url + data -> data 
       resquest   (response)

programme que l'on lance, on lui donne un chemin via url.

écrire ### entre les GET

créer un fichier requetes.http
check Postman
utiliser express pour créer un API

/random => renvoie un nombre aléatoire
/randomBetween => renvoie un nombre compris entre deux nombre fourni dans request
