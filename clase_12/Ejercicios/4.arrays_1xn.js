/* Para agregar Elementos: push(), unshift() */
const prompt = require('prompt-sync')()

let colores = [];
let color_usuario;
console.log('Ingresa 5 colores que te gusten. Para terminar escribe salir.');

do {
   color_usuario = prompt('Ingresa un color: ');
   if (color_usuario.toLocaleLowerCase() !== 'salir') {
    colores.push(color_usuario);
   }
} while (color_usuario.toLocaleLowerCase() !== 'salir');
console.log('La matriz con la información ingresada es:', colores);