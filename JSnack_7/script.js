/* Stampa le potenze di 2 fino a 1000. */

/* num da 1 a 1000 */

for (let i = 0; i <= 1000; i++) {
    
    let element = Math.pow(2, i);
    console.log(element);  
    document.querySelector(".container").innerHTML += `${element} <br>`
}