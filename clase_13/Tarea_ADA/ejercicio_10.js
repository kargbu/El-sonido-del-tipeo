/*
Crea una función llamada calcular_factorial que reciba un número y devuelva su factorial.
*/
const prompt = require('prompt-sync')();

let num_usuario = parseInt(prompt('Ingresa un número natural para calcular su factorial: '));

function factorial (num) {

    if (num == 0) {
        return 1;
      
    } let fac = 1; 
        for(let i = 1; i < num; i++) {
        fac *= i+1;
        
        }
        return fac;
    }
let resultado = factorial(num_usuario);
console.log(`El factorial del número ${num_usuario} es ${resultado}.`);