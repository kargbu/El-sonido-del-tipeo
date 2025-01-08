/*
Agrega un prefijo y un sufijo a cada palabra de la siguiente lista de palabras:
['hola', 'mundo', 'javascript']. Cada palabra tendrá los signos de admiración.
*/

const lista_palabras = ['hola', 'mundo', 'javascript'];

let prefijo = '¡';
let sufijo = '!';

let frase_completa = lista_palabras.map(function(palabra){
    return prefijo + palabra + sufijo;
});

console.log(frase_completa);