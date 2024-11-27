/* Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta,
debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña es "1234" */
const prompt = require('prompt-sync')();

let contrasenia = '1234';
let ingresa_contrasenia;

do {
    ingresa_contrasenia = prompt('Ingresa la contraseña: ');
    if (ingresa_contrasenia !== contrasenia) {
        console.log(prompt('Error: contraseña incorrecta. Ingresa contraseña: '));
    }
} while (contrasenia !== ingresa_contrasenia);

console.log('!Bienvenido¡');