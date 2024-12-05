// Crear una función llamada concatenar_nombres que reciba dos nombres (nombre y apellido)
// como parámetros y devuelva el nombre completo concatenado.
const prompt = require('prompt-sync')();

let nombre_usuario   = prompt('Ingresa tu nombre: ');
let apellido_usuario = prompt('Ingresa tu apellido: ');

function concatenar_nombres(nombre, apellido) {
    return nombre + ' ' + apellido; // Concatenar nombre y apellido con un espacio en medio
}

// Llamar a la función y mostrar el resultado
let nombre_completo = concatenar_nombres(nombre_usuario, apellido_usuario);
console.log('Nombre completo:', nombre_completo);

// Ejemplo de uso de .repeat()
let saludo = '¡Hola! ';
console.log(saludo.repeat(4));
