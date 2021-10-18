/* Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */

/* chiedere all'utente quandi numeri vuole inserire */
let answer = parseInt( prompt("quanti num. vuoi inserire?") );
/* fare inserire tanti num. quanti vuole l utente */
let num;

for (let i = 0; i < answer; i++) {
   num = parseInt(prompt("inserisci numero"));
    console.log(num);
    document.querySelector(".container").innerHTML += `${Math.pow(num, 3)} <br>`;
}


