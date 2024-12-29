/* Programar que dado un número por consola se calcule si es mayor, menor o igual*/
const prompt = require('prompt-sync')();

let num_1 = parseFloat(prompt('Ingresa el primer número a comparar: '));
let num_2 = parseFloat(prompt('Ingresa el segundo número: '));

if (num_1 == num_2) {
    console.log(`Los números ${num_1} y ${num_2} son iguales.`)
} else if (num_1 < num_2) {
    console.log(`El número ${num_1} es menor que el número ${num_2}.`)
} else {
    console.log(`El número ${num_2} es menor que el número ${num_1}.`)
}