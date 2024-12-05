/*
Crea una función declarada llamada convierte_horas_a_minutos que reciba un número de horas como
parámetro y devuelva el total en minutos.
*/
const prompt = require('prompt-sync')();

let horas_usuario = parseFloat(prompt('Ingresa las horas que quieres convertir en mintutos: '));

function convierte_horas_a_minutos (horas) {
    let minutos = horas * 60;
    return minutos
}

let total_minutos = convierte_horas_a_minutos(horas_usuario);
console.log(`Son ${total_minutos} minutos.`);