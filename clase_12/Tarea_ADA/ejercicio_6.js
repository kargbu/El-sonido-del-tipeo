/* Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorer sus valores y sumar solo los números que estén
por encima o sean iguales a 10, pero menores que 1000. */

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020,4],
    [5, 5, 5097, 100, 4]
];

let suma = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[0].length; j++) {
        if (10 <= matriz[i][j] && matriz[i][j] < 1000) {
            suma +=  matriz[i][j];
        }
    }
}
console.log(matriz);
console.log(`La suma de los valores mayores e iguales a 10 pero menores que 1000 es ${suma}`);