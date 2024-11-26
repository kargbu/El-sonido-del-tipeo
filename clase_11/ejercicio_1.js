/* Escribe un programa que pida al usuario un número cualquiera. El programa deberá analizar si el 
número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolver y al final muestra 
un mensaje que explique en cada caso p*/
const prompt = require('prompt-sync')();

let num_usuario = parseFloat(prompt('Ingresa un número: '));

if (num_usuario < 0) {
    console.log('El número' + num_usuario + 'es negativo')
}else if (0 < num_usuario) {
    console.log('El número' + num_usuario + 'es positivo')
} else {
    console.log('El número es cero')
}