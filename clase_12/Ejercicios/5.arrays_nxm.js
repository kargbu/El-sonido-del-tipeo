// Crear una matriz con dimensiones nxm y colocar información.
const prompt = require('prompt-sync')();

let filas = 5;
let columnas = 4;

// Definimos matriz n × m (filas × columnas)
let matriz_colores = new Array(filas);
for (let i = 0; i < filas; i++) {
    matriz_colores[i] = new Array(columnas);
}

console.log('Ingresa cinco colores.');

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        matriz_colores[i][j] = prompt(`Ingresa el color ${j + 1} para la fila ${i + 1}: `);
    }
}

console.log('La matriz que se forma es: ', matriz_colores);




