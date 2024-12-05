// Crea una función declarada llamada par que reciba un número y devuelva "El número es par" o "El número es impar".
const prompt = require('prompt-sync')();

let num_usuario = parseFloat(prompt('Ingresa un número: '));

function par(num) {
    if (num % 2 === 0) {
        console.log(`El número ${num} es par.`);
    } else {
        console.log(`El número ${num} es impar.`);
    }
}

// Llama a la función par con el número ingresado por el usuario
par(num_usuario);
