// Funciones en JavaScript

// Función calcular promedio
function calcular_prom(num) {
    let suma = 0;
    for (let i = 0; i < num.length; i++) {
        suma += num[i];
    }
    let promedio = suma / num.length;
    return promedio
}

// Implementación
let num = [10,120,30,40,50];
let promedio = calcular_prom(num);
console.log('El promedio es ' + promedio)