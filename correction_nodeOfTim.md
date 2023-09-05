# Review nodeOfTim #

## ligne 2 - 3 ##

```const _help_ = "--help";
const _name_ = "--name";
```
Les arguments --name et --help sont déclarés dans des variables en début de code or ils peuvent très bien être utilisées sous forme de string, soit en utilisant : " "

## ligne 19 ##

```
interface Person {
    nom: string,
    prenom: string,
    age: number,
    sexe: string,
};
```

Plutôt utiliser Ipersonne (i majuscule) pour indiquer clairement qu'il s'agit d'une interface.

## ligne 34 ##

Peut aussi utiliser la technique suivante :

```
const personne1 = {_...Personne_, "Laforge", "Thomas", 30, "Masculin"}
```

au lieu de :

```
const personne1 = new Personne("Laforge", "Thomas", 30, "Masculin");
```


