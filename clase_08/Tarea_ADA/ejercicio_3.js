/*
Suma de dos números
*/
const prompt = require('prompt-sync')();

let num_1 = parseFloat(prompt('Ingresa el primer sumando: '));
let num_2 = parseFloat(prompt('Ingresa el segundo sumando: '));

function suma(num_1, num_2) {
    let resultado = num_1 + num_2;
    return resultado;
}

let resultado = suma(num_1, num_2);
console.log(`El resultado de la suma de ${num_1} y ${num_2} es ${resultado}.`);
