/* Saludo personalizado */
const prompt = require('prompt-sync')();

let name_usuario = prompt('Ingresa tu nombre: ');

function name_mayusculas (num_usuario) {
    return num_usuario.charAt(0).toUpperCase() + num_usuario.slice(1);
}

let saludo_personalizado = name_mayusculas(name_usuario);
console.log(`¡Hola, ${saludo_personalizado}!`) 