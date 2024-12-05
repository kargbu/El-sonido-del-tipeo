/*
Crea una función llamada contar_hasta. Esta recibirá un número y se construirá con un bucle
para imprimir todos los número desde 1 hasta ese número.
*/
const prompt = require('prompt-sync')();

let num_usuario = parseFloat(prompt('Ingresa un número: '));

function contar(i) {
    for(let i = 1; i<= num_usuario; i++) {
       console.log(i);
    }
} 

contar(num_usuario);

