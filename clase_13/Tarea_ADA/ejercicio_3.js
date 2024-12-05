/* Declara una variable global llamada saludo_global con el valor " Hola desde scope global". Luego, crea
una función llamada saludo_local con el valor "Hola desde el scope local" y que imprima ambos mensajes.
*/

let saludo_global = 'Hola desde scope global.';

function saludo () {
    let saludo_local = 'Hola desde scope local.';
    console.log(saludo_local);
    console.log(saludo_global);
}
saludo();