/* Crea un programa que le pida al usuario un número positivo. EL programa deberá contar desde el 1
hasta ese número e imprimir cada valor en la consola. Usa un ciclo for para realizar la tarea.*/
const prompt = require('prompt-sync')();

let num_usuario = parseFloat(prompt('Ingresa un número: '));

if (num_usuario > 0) {
     for (let contador = 1; contador <= num_usuario; contador++) { 
        console.log(contador); 
    } } else { 
        console.log('Por favor, ingresa un número positivo.'); 
    }