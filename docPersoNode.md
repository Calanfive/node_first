Node JS

# script #
cacher la complexit� + automatisation (CRON)

# version #
v18.17.0 = majeur, mineur, fix

diff�rence dependencies / dev.dependencies 

npm install 
npm i
      -D
     --save-dev
exemple : npm install -D typescript = d�placer dans dev.dep

va cr�er une nouvelle ligne dans node-modules 

## pour reset ##
rm-rf node.modules = supprimer node modules + package.json
rm package.lock.json

## Cr�ation de dossier + initialisation node ##

mkdir qqch
npm init
npm install typescript

### Commandes argument ###

process.argv = tableau des arguments
process.argv.indexOf("--name") + 1 = recherche dans le tableau l'index de --name + affiche l'argument suivant
process.argv.includes("--help") = m�me recherche avec --help

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

�crire ### entre les GET

cr�er un fichier requetes.http
check Postman
utiliser express pour cr�er un API

/random => renvoie un nombre al�atoire
/randomBetween => renvoie un nombre compris entre deux nombre fourni dans request
