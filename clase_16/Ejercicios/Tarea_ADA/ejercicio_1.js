/*
Crear un array con los cuadrados de los números de la siguiente lista [2, 4, 6, 8]. El objetivo es
crear una nueva lista donde cada número de la lista original se transforme en su cuadrado. Para
finalizar, imprime la lista.
*/

let listaNumeros = [2, 4, 6, 8];
console.log(listaNumeros)

let cuadradoDeNumeros = listaNumeros.map(function(numero) {
    return numero * numero;
});
console.log(cuadradoDeNumeros);