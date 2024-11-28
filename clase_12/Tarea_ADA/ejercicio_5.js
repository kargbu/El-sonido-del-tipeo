/* Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los
almacene en un array. Luego, solicita al usuario ingresar un nombre y
verifica si ese nombre se encuentra en el array. (Pueden desglosar en
pasos el código si eso les facilita su desarolo) */
const prompt = require('prompt-sync')();

let fila = 5
let nombres = [];

for (i = 0; i < fila; i++) {
    let nombre = prompt(`Ingresa el nombre ${i+1}: `);
    entrada_nombre = nombre.toLowerCase();
    nombres.push(entrada_nombre)
}

let verifica_nombre = prompt('Escribe el nombre que quieres buscar en el arreglo: ');
let nombre_encontrado = false;
for (i = 0; i < fila; i++) {
    if (nombres[i] == verifica_nombre.toLowerCase()) {
        console.log(`El nombre ${verifica_nombre} está en la posición ${i+1}.`)
        nombre_encontrado = true;
        break;
    }else {

    }
}

if (!verifica_nombre){
    console.log('El nombre no fue encontrado.');
    nuevo_nombre = prompt(`Ingresa un nuevo nombre: `);
    nuevo = nuevo_nombre.toLowerCase();
    nombres.push(nuevo);
}
console.log(`El arreglo que se tiene es: `);
console.log(nombres);

