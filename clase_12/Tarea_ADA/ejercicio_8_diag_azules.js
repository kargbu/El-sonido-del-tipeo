// Sumar la diagonal
let matriz = [];

// Inicializar la matriz con ceros
for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = 0;
    }
}

let suma_otra_diagonal = 0

// Colocar los números en la diagonal secundaria
for (let i = 0; i < 10; i++) {
     matriz[i][9 - i] = i * 10 + (10 - i);
    suma_otra_diagonal += matriz[i][9 - i];
}

// Imprimir la matriz de forma más legible
for (let i = 0; i < 10; i++) {
    console.log(matriz[i].join(' '));
}

console.log(`La suma de la diagonal es ${suma_otra_diagonal}.`);

/* 
0*10 + (10-0)
1*10 + (10-1)
2*10 + (10-2)
i * 10 + (10 - i)
1, 
*/