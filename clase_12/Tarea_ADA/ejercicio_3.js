/* Nuestra tarea es encontrar la cantidad de números impares que hay desde
el número 0 hasta el número x (inclusivo). */
const prompt = require('prompt-sync')();

let x = parseInt(prompt('Ingresa un número natural: '));

let contador_impares = 0;

if (x % 2 == 1) {
    for(x; x > 0; x -2)
    contador_impares ++;
} else if {
    
}