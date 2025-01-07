/*
Verificar si una lista contiene un elemento
*/
const prompt = require('prompt-sync')();

let productos = ['p_1', 'p_2', 'p_3', 'p_4', 'p_5'];

let verificar_producto = productos.includes(prompt('Ingresa el producto a buscar: ').toLowerCase());

if (verificar_producto) {
    console.log(`El producto se encuentra en ${productos}.`);
} else {
    console.log(`El producto no se encuentra en ${productos}.`);
}

