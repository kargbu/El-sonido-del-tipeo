/* Escribe un programa que pida al usuario un número entero positivo y muestre todos los múltiplos de 
ese número entre 1 y 100. Utiliza un ciclo for para resolverlo. */
const prompt = require('prompt-sync')();

let num_usuario = parseInt(prompt('Ingresa un número natural mayor que cero y menor que 101: '));

if (isNaN(num_usuario) || num_usuario <= 0 || 100 < num_usuario) {
    console.log('Error: el número tiene que ser un natural entre 1 y 100.');
} else {
    console.log(`Los múltimplos de ${num_usuario} son: `);
    for(let i = num_usuario; i <= 100; i += num_usuario) {
        console.log(i);
    }
}