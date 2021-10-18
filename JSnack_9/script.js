/* Calcola la somma e la media dei primi 10 numeri. */
/* chiedere all'utente 10 num. */

let numbers = 0;

for (let i = 0; i < 10; i++) {
   let element = parseInt(prompt("inserisci un numero"));
    
   numbers += element;

}
console.log(numbers);
let media = numbers / 10;
console.log(media);
