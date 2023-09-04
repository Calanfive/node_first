console.log("Hello world");
console.log(process.argv);

if (process.argv.includes("--help")) {
    console.log("je vais vous aider");
}

const posName = process.argv.indexOf('--name')
if (posName !== -1) {
    console.log("Bonjour ", process.argv[posName + 1]);
}


