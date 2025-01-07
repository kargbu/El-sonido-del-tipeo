/* Agregar y eliminar una fila */
const prompt = require('prompt-sync')();

let productos = [ 'p_1', 'p_2', 'p_3', 'p_4', 'p_5', 'p_6' ];
let producto_0 = prompt('Ingresa el producto que se debe agregar al inicio de la lista: ');
let p_0 = producto_0.toLowerCase();
console.log(p_0)

// Agregar el producto al incio de la lista
productos.unshift(p_0);
console.log(productos);

