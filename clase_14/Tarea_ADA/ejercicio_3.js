/*
Clasificación de edades
Se le solicitará al usuario su edad.
1. Utiliza la función flecha para la clasificación de la edad en niño, adolescente, adulto o adulto mayor.
*/
const prompt = require('prompt-sync')();

let edad_usuario = parseInt(prompt('Ingresa tu edad en número: '));

let clase = () => {
    if (edad_usuario < 12) {
        console.log(`Vos eres un niño.`);
    } else if (edad_usuario >= 12 && edad_usuario < 18) {
        console.log(`Vos eres un adolescente.`);
    } else if (edad_usuario >= 18 && edad_usuario < 50) {
        console.log(`Vos eres un adulto.`);
    } else {
        console.log(`Eres un adulto mayor.`);
    }
}

clase();

