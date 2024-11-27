/* Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa
debe mostrar todos los números pares que se encuentren entre esos dos valores dados, incluyendo los límites
si son pares. Utiliza un ciclo for para recorrer los números entre el inicio y el fin. Si el número inicial
es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.*/
const prompt = require('prompt-sync')();

let num1_usuario = parseFloat(prompt('Ingresa un número: '));
let num2_usuario = parseFloat(prompt('Ingresa un número: '));

if (num1_usuario > num2_usuario) { 
    console.log('El número inicial es mayor que el final.'); 
} else { 
    // Asegurarse de empezar con un número par 
    if (num1_usuario % 2 !== 0) { 
        num1_usuario++; 
} // Recorrer y mostrar los números pares 
for (let i = num1_usuario; i <= num2_usuario; i += 2) { 
    console.log(i); 
} 
}