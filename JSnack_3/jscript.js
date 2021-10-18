/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


/* voglio 10 domande */
let answer = "";
let result = 0

for (let i = 0; i < 10; i++) {
    /* facciamo le 10 domande */
    answer = parseInt(prompt("digita un num."));
    /* console.log(answer); */
    result = result + answer;
    console.log(result);

    document.querySelector(".container").innerHTML = `la somma di tutti i numeri che hai scelto è ${result}`;
}
