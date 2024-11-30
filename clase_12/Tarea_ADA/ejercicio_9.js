/* Aplicación del control de gastos
*/
const prompt = require('prompt-sync')();

// Definición de la matriz
let gastos_mensuales = [];

// Llenar la matriz con encabezados y valores
for (let i = 0; i <= 5; i++) { // 5 semanas (incluye encabezados)
    gastos_mensuales[i] = []; // Inicializa cada fila como un arreglo
    for (let j = 0; j <= 7; j++) { // 7 días (incluye encabezados)
        if (i === 0 && j > 0) {
            // Encabezados de días
            gastos_mensuales[i][j] = `   Día ${j}  `;
        } else if (j === 0 && i > 0) {
            // Encabezados de semanas
            gastos_mensuales[i][j] = `Semana ${i} `;
        } else if (i === 0 && j === 0) {
            // Esquina superior izquierda (vacía)
            gastos_mensuales[i][j] = "           ";
        } else {
            // Resto de la matriz: solicitar gastos
            gastos_mensuales[i][j] = parseFloat(
                prompt(`Ingresa los gastos de (Semana ${i}, Día ${j}): `), 10
            );
        }
    }   gastos_mensuales[]
}

// Imprimir la matriz de forma legible
console.log("\nMatriz de gastos mensuales:");
for (let i = 0; i <= 5; i++) {
    console.log(gastos_mensuales[i].map(item => String(item).padEnd(10)).join(""));
}


