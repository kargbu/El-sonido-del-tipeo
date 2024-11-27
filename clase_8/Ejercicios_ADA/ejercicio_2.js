/* Escribe un programa
que pida al usuario tres números y determine cuál es el mayor de los
tres. Muestra el número mayor en la consola.
Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides
usar “let” para definir variables.
Pista 2: Investiga que es parseFloat, ya que este ejercicio lo
necesitaras.*/
const prompt = require('prompt-sync')()

let num_1 = parseFloat(prompt('Ingrese un número: '));
let num_2 = parseFloat(prompt('Ingrese el segúndo número: '));
let num_3 = parseFloat(prompt('Ingrese un tercer número: '));

if (num_1 < num_2 && num_2 < num_3) {
    console.log('El ${num_3} es el mayor que ${num_2} y que el ${num_1}');
} else if (num_2 < num_1 && num_1 < num_3 )