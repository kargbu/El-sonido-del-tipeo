/*
Calcular descuento dada una cantidad.
1. Solicita al usuario la cantidad del producto y el precio unitario.
2. Usa la función flecha para calcular el total considerando el descuento.
*/
const prompt = require('prompt-sync')();

let precio_unitario = parseInt(prompt('Ingresa el precio del producto: '));
let cantidad = parseInt(prompt('Ingresa la cantidad de productos que llevas: '));
let descuento = parseInt(prompt('Ingresa el descuento que se va a aplicar:  '));

let precio_con_descuento = () => {
    let costo = precio_unitario * cantidad;
    let des = costo *  (descuento/100);
    let resultado = costo - des
    return resultado
}

precio_con_descuento();
console.log(`El precio final es de ${precio_con_descuento()}`);


