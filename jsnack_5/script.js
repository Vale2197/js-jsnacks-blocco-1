/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

/* array vuoto */
let dispari = []
let quest = ""

for (let i = 0; i < 6; i++) {
    quest = parseInt(prompt("inserisci un numero"));
    console.log(quest); 
    if (quest % 2 == 0) {
        console.log("pari");

    } else {
        console.log("disp");
        dispari.push(quest);
        console.log(dispari);
    } 
}
