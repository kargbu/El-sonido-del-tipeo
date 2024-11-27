/* Crea un programa que le pida al usuario un número y luego imprima su tabla de
multiplicar desde el 1 hasta el 10. Usa un ciclo for.*/
const prompt = require('prompt-sync')();

let num_usuario = parseFloat(prompt('Ingresa un número: '));

for(let i = 1; i <= 10; i++) {
    let mult = i + num_usuario;
    console.log(`${num_usuario} x ${i} = ${mult}`);
}
