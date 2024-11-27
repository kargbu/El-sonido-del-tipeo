/* Crea un programa que solicite al usuario ingresar números continuamente 
hasta que el usuario ingrese un número negativo. Luego, imprime la suma 
de todos los números ingresados.*/
const prompt = require('prompt-sync')();

let suma = 0;
let num_usuario;

do {
  num_usuario = parseFloat(prompt('Ingresa un número: '));

  if (isNaN(num_usuario)) {
    console.log('Por favor, ingresa un número válido.');
    continue; // Volver al inicio del bucle si el usuario no ingresa un número válido
  }

  if (num_usuario >= 0) {
    suma += num_usuario;
  }

} while (num_usuario >= 0);

console.log(`La suma de los números ingresados es: ${suma}`);
