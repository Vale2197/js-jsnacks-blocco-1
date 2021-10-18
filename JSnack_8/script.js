/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */
let number = prompt("inserisci un num di 4 cifre");
let risultato = 0;

if (number.length == 4) {
    for (let i = 0; i < number.length; i++) {
        const element = parseInt(number[i]);
        /* console.log(element); */
        risultato+=element;     
    }
    console.log(risultato);
  
} else {
    console.log("non hai inserito un num. di 4 cifre");
}
