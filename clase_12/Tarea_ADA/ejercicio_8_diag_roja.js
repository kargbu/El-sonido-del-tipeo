// Sumar la diagonal
let matriz = [];

// Inicializar la matriz con ceros
for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = 0;
    }
}

let suma_diag = 0;

// Colocar los números en la diagonal principal
for (let i = 0; i < 10; i++) {
    matriz[i][i] = i * 10 + (i + 1);
    suma_diag += matriz[i][i];
}

// Imprimir la matriz de forma más legible
for (let i = 0; i < 10; i++) {
    console.log(matriz[i].join(' '));
}

console.log(`La suma de la diagonal es ${suma_diag}.`);


/*
    0*10+1, 1*10+2, 2*10+3, ..., 9*10 + 10 en general es (i-1)*10 + i o i*10 + (i+1)
    La suma iterada es
    0*10 + 1             = 0*10 + (0+1)
    1 + (1*10 + 2 )      = (0+1)*10 + (0+1+2)
    (1*10 +3) + (2*10+3) = (0+1+2)*10 + (0+1+2+3)   

En general la suma es : (i*i+1)/2*10 + (i+1)(i+2)/2

*/