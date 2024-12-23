/*
Objetos
*/
const prompt = require('prompt-sync')();

let horas_entrenamiento = parseFloat(prompt('Ingresa el número de horas de entrenamiento en la semana: '));
let deportista = {
    nombre        : prompt('Ingresa el nombre del deportista: '),
    energia       : parseFloat(prompt('¿Cuánta energía hay en la semana: ')),
    experiencia   : parseFloat(prompt('¿Cuánta experiencia tienes? ')),
    entrenamiento : function entrenar_horas(horas) {
        this.energia -= horas * 5; // Ejemplo de reducción de energía por horas de entrenamiento
        this.experiencia += horas * 2; // Ejemplo de aumento de experiencia por horas de entrenamiento
    }
};

// Ejemplo de uso de la función de entrenamiento
deportista.entrenamiento(horas_entrenamiento);
console.log(`Nombre: ${deportista.nombre}`);
console.log(`Energía: ${deportista.energia}`);
console.log(`Experiencia: ${deportista.experiencia}`);

