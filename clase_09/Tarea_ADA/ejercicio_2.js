/* Programa que dado un número se verifique que esté dentro de un rango definido */
const prompt = require('prompt-sync')();

let rango_min = 100;
let rango_max = 500;

let num_usuario = parseFloat(prompt(`Ingresa un número para conocer si está dentro del rango: `));

if (num_usuario <= rango_max && num_usuario <= rango_min) {
    console.log(`El número ${num_usuario} está dentro del rango.`)
} else {
    console.log(`El número ${num_usuario} está fuera de rango.`)
}