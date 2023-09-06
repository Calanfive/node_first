// console.log("Hello world");
// console.log(process.argv);
if (process.argv.includes("--help")) {
    console.log("je vais vous aider");
}
const posName = process.argv.indexOf('--name')
if (posName !== -1) {
    console.log("Bonjour ", process.argv[posName + 1]);
}
// nom, prenom, age, sexe
interface Ipersonne { 
    nom: string;
    prenom: string;
    age: number;
    sexe: string;
}
const pers : Ipersonne = {
    prenom: "cam",
    nom: "pam",
    age: 50,
    sexe: "h",
}
const newName = {...pers, nom:"laforge", prenom:"thomas"}
const newName2 = {...pers, nom:"amish", prenom:"fatir"}
//console.log(pers, newName, newName2);


// import {readJsonSync,writeJsonSync} from "fs-extra"
// writeJsonSync('./personne.json', pers);
// console.log(readJsonSync("./personne.json" ));

// // import { readJsonSync, writeJsonSync } from "fs-extra"
// // const file = 'personne.json';
// // writeJsonSync(file, {name : 'Sekri', prenom : 'Karim', age : '42'});
// // const obj = readJsonSync(file);
// // console.log(obj) ;

// import "dotenv/config"

// console.log("env", process.env.Name);

import express from 'express'
// import path from "path"
// import { rootCertificates } from "tls"


const app = express()
const port = 3566

// app.get('/date', (req, res) => {
//   // créé un nouvel objet `Date`
//   let today = new Date();
   
//   // récupère la date d'aujourd'hui au format `MM/DD/YYYY`
//   let now = today.toLocaleDateString();
//     res.send(now)
// })$

app.get('/random-between/:min/:max', (req, res) => {
  console.log('toto');
  
  const min = parseInt(req.params.min)
  const max = parseInt(req.params.max)
  const random = Math.floor(Math.random() * (max - min + 1)) + min
  res.send(random.toString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.use(express.static('public'))

// app.get('/toto', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/tata', (req, res) => {
//   res.send(JSON.stringify(pers))
// })


// Create a route who return the image on /public/image.jpg
// app.get('/simplon/logo', (req, res) => {
//   res.sendFile('logo.png', { root: path.resolve(__dirname, "../public")})
// })

// app.get('/simplon/web', (req, res) => {
//   res.sendFile('index.html', { root: path.resolve(__dirname, "../public")})
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })