/* Para este ejercicio vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. Rojo: 505
Verde 505. */

//Matriz de 10X10 cuyas entradas comiencen en 1 y termine en 100
let matriz_10x10 = [];
let valor = 1;

for (let i = 0; i < 10; i++) {
    let filas = [];
    for (let j = 0; j < 10; j++) {
        filas.push(valor); // Agregar el valor actual a la fila
        valor++;           // Incrementar el valor
    }
    matriz_10x10.push(filas); // Agregar la fila completa a la matriz
}
// Imprimir la matriz de forma más legible
for (let i = 0; i < 10; i++) {
    console.log(matriz_10x10[i].join(' '));
}


