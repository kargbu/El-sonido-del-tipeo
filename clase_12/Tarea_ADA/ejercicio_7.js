/*  Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros
números enteros y positivos. Luego, escribe un algoritmo para sumar
todos los números en la matriz.  */
const prompt = require('prompt-sync')();

let filas    = 5;
let columnas = 5;

// Definimos la matriz 5×5
let matriz_5x5 = new Array(filas);
for (i = 0; i < filas; i++) {
    matriz_5x5[i] = new Array(columnas);
}

let suma = 0;

for(i = 0; i < filas; i++) {
    for (j = 0; j < columnas; j++) {
        matriz_5x5[i][j] = parseFloat(prompt(`Ingresa la entrada (${i+1},${j+1}):`),10);
        suma += matriz_5x5[i][i];
    }
}

console.log('La matriz con las entradas es: ');
console.log(matriz_5x5);
console.log(`La suma de las entradas de la matriz es ${suma}.`);
