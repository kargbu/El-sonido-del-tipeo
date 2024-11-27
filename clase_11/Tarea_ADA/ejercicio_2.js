/* Escribe un programa que le pida al usuario ingresar un color del semáforo.
Dependiendo del color ingresado, el progrma deberá imprimir un mensaje con la acción que se señala:
1. Rojo: 'Alto, no puedes avanzar'
2. Amarillo: 'Precaución, prepárate para avanzar'
3. Verde: 'Avanza con seguridad'
Si el usuario ingresa un color inválido, el programa debe mostrar un
mensaje: "Color no reconocido, ingresa rojo, amarilo o verde."
Utiliza un switch para resolver este ejercicio.*/
const prompt = require('prompt-sync')();

let color_usuario = prompt('De los colores de un semáforo, ingresa un color: ');
let color = color_usuario.toLowerCase();

switch (color) {
    case color ==  'verde':
        console.log('Avanza con seguridad');
        break;
    case color == 'amarillo':
        console.log('Precaución, prepárate para avanzar');
        break;
    default:
        console.log('Alto, no puedes avanzar');
}
