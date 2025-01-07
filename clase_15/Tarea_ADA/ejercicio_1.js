/*  Añadir productos del abasto de una tienda online */
const prompt = require('prompt-sync')();

let productos = ['p_1', 'p_2', 'p_3', 'p_4', 'p_5'];
let nuevo_producto = prompt('Ingresa un producto en el inventario: ').toLowerCase();
productos.push(nuevo_producto);
console.log(productos);
