/* Calcula el doble de un número */
const prompt = require('prompt-sync')();

let num_usuario = parseFloat(prompt('Ingrese un número cualquiera: '));

function doble (num) {
    return 2 * num
}
let resultado = doble (num_usuario);
console.log(`El doble de ${num_usuario} es ${resultado}.`)