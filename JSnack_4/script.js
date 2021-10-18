/* In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa. */
let invitati = ["piero", "alfredo", "costanza", "rosa", "rudy", "ferilli"];
let userName = prompt("inserisci il tuo nome");

/* verificare se tra gli invitati c'è l userName */
for (let i = 0; i < invitati.length; i++) {
    console.log(invitati[i]);
    if ( invitati[i] == userName.toLowerCase ) {
        console.log("welcome");
    } 
    else {
        console.log("not work");
    } 
    
}
