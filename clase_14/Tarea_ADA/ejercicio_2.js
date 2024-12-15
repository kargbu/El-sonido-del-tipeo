/*
Calcula el promedio de las calificaciones de un estudiante.
1. Solicita al usuario cinco calificaciones.
2. Usa la función flecha para calcular el promedio.
*/
const prompt = require('prompt-sync')();

let calificacion_usuario;
let calificaciones = [];
for (let cal = 1; cal <= 6; cal ++) {
    calificacion_usuario = parseFloat(prompt(`Ingresa la calificación ${cal}: `));
    calificaciones.push(calificacion_usuario);
}

let promedio = (calificaciones) => {
    let suma = 0
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
}
console.log(`El promedio de las calificaciones es: ${promedio(calificaciones)}`);