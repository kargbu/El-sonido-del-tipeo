/*
Contar la cantidad total de letras en una lista de palabras. Si la lista es ['sol', 'luna', 'estrela',
¿cuántas letras hay en total en todas las palabras.
*/
const lista_palabras = ['sol', 'luna', 'estrella'];

const suma_palabras = lista_palabras.reduce(function(contador, palabra){
    return contador + palabra.length;
}, 0);
console.log(`El total de sumar las palabras de la lista ${lista_palabras} es ${suma_palabras}.`);