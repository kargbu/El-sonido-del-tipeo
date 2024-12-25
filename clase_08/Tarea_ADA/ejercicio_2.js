/* Verifica que el número es positivo negativo o cero */
const prompt = require('prompt-sync')();

let num_usuario = parseFloat(prompt('Ingresa un número: '));

switch (true) {
    case num_usuario > 0:
        console.log(`El número ${num_usuario} es positivo.`);
        break;
    case num_usuario < 0:
        console.log(`El número ${num_usuario} es negativo.`);
        break;
    case num_usuario == 0:
        console.log(`El número ${num_usuario} es igual a cero.`);
        break;
    default:
        console.log(`El término ${num_usuario} es una entreda no válida.`);
}

