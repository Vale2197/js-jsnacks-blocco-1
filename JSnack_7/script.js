/* Stampa le potenze di 2 fino a 1000. */

/* num da 1 a 1000 */
let number = 0;

for (let i = 0; i <= 1000; i++) {
    
    number += Math.pow(2, i);
    
    if (number <= 1000) {
        console.log(number);
        document.querySelector(".container").innerHTML += `${number} <br>`;
    }
     
}



