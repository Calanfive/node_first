console.log("Hello world");
console.log(process.argv);

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

console.log(pers, newName, newName2);

