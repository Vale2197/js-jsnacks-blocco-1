/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

/* chiedere all'utente 2 num */
let numFirst = parseInt(prompt("inserisci un numero"));
let secondNum = parseInt(prompt("inserisci un altro numero"));

/* stampare il maggiore */
/* dove? */
let container = document.querySelector(".content");
/* stampare il maggiore */
if (numFirst > secondNum) {
    container.innerHTML = `il num. maggiore è ${numFirst}`;
}
 else if (secondNum > numFirst) {
    container.innerHTML = `il num. maggiore è ${secondNum}`;
} else {
    container.innerHTML = "hai inserito due numeri uguali.."
}