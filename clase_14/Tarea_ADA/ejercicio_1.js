/*
Calcula el precio de un producto con el IVA inclluido.
1. Solicitar al usuario el precio de un producto.
2. Calcula el IVA del producto e imprímelo.
Usa la función flecha para calcular el precio fina.
*/
const prompt = require('prompt-sync')();

let precio_usuario = parseFloat(prompt('Ingresa el precio del producto para calcular el IVA: '));

let iva = () => precio_usuario * 0.15;

console.log(`El IVA es de ${iva ()} pesos y el precio final es de ${precio_usuario + iva()}.`)