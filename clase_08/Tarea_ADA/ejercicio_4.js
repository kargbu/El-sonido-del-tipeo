/* Determinar si un número es par o impar */
const prompt = require('prompt-sync')();

let num_usuario = parseFloat(prompt('Ingresa un número: '));

if (num_usuario % 2 == 0 || num_usuario == 0) {
    console.log(`El número ${num_usuario} es par.`)
} else {
    console.log(`El número ${num_usuario} es impar.`)
}