/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

/* chiedere all'utente due parole */
const firstWord = prompt("inserisci una parola");
const secondWord = prompt("inseriscine un' altra");
const container = document.querySelector(".container");
/* stampare la parola più corta, poi quella piu lunga */
if (firstWord.length < secondWord.length) {
    container.innerHTML = `la parola più corta è ${firstWord} <br>`;
    /* poi la piu lunga */
    container.innerHTML += `mentre la parola più lunga è ${secondWord} <br>`;
}
else if (secondWord.length < firstWord.length) {
    container.innerHTML = `la parola più corta è ${secondWord} <br>`;
    /* poi la piu lunga */
    container.innerHTML +=  `mentre la parola più lunga è ${firstWord} <br>`;
}
else {
    container.innerHTML = "le parole sono della stessa lunghezza";
}