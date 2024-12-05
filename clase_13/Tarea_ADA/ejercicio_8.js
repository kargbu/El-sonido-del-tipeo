// Convertir grados Celsius a Fahrenheit
const prompt = require('prompt-sync')();

let grados_celsius = parseFloat(prompt('Ingresa los grados Celsius que quieres convertir a Fahrenheit: '));

function convertir_grados(grados_celsius) {
    let grados_fahrenheit = (grados_celsius * (9/5)) + 32; // Calcula los grados Fahrenheit
    return grados_fahrenheit; // Devuelve el resultado
}

// Llama a la función y muestra el resultado
let resultado = convertir_grados(grados_celsius);
console.log(`Son ${resultado} grados Fahrenheit.`);
