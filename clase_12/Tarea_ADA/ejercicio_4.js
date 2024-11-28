const prompt = require('prompt-sync')();

// Definiendo las dimensiones de la matriz
let filas = 2; // Número de estudiantes
let columnas = 5; // 1 columna para el nombre y 4 columnas para las notas

// Definir la matriz de las dimensiones anteriores
let matriz_estudiantes = new Array(filas);
for (let i = 0; i < filas; i++) {
    matriz_estudiantes[i] = new Array(columnas);
}

// Instrucciones de llenado.
console.log('Ingresa primero el nombre del estudiante y luego las notas.');

// Construir la matriz_estudiantes
for (let i = 0; i < filas; i++) {
    // Ingresar el nombre del estudiante
    matriz_estudiantes[i][0] = prompt('Ingresa el nombre del estudiante: ');

    // Ingresar las notas del estudiante
    for (let j = 1; j < columnas; j++) {
        matriz_estudiantes[i][j] = parseFloat(prompt(`Ingresa la nota ${j} del estudiante ${matriz_estudiantes[i][0]}: `));
    }
}

// Mostrar la matriz con la información ingresada
console.log('La matriz con la información ingresada es:');
console.log(matriz_estudiantes);
