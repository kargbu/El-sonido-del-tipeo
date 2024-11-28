/* Nuestra tarea es encontrar la cantidad de números impares que hay desde
el número 0 hasta el número x (inclusivo). */
const prompt = require('prompt-sync')();

let x = parseInt(prompt('Ingresa un número natural: '));

let contador_impares = 0;

for(let i = 0; i <= x; i++) {
    if (i % 2 !== 0) {
    contador_impares++;
    }
}
console.log(`La cantidad de impares entre el 0 y ${x} es ${contador_impares}.`);