/* Crea un programa que le pida al usuario dos números y una operación
matemática a realizar: suma, resta, multiplicación o división. Según la operación
ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario
ingresa una operación inválida, el programa debe mostrar un mensaje de error.
Usa switch para resolverlo.*/
const prompt = require('prompt-sync')();

let operacion_usuario = prompt('Escribe la operación que deseas realizar: ');
let operacion = operacion_usuario.toLocaleLowerCase();
let num1_usuario = parseFloat(prompt('Ingresa un número: '));
let num2_usuario = parseFloat(prompt('Ingresa otro número: '));

switch (operacion) {
    case operacion = 'suma':
        let suma = num1_usuario + num2_usuario;
        console.log("La " + operacion " de " +  num1_usuarios " y " num2_usuario + " es " + suma + ".");
        break;
    case operacion = 'resta':
        let resta = num1_usuario - num2_usuario;
        console.log("La resta de ${num1_usuario} menos ${num2_usuario} es ${resta}.")
        break;
    case operacion = 'multiplicación':
        let mult = num1_usuario * num2_usuario;
        console.log('"La multiplicación de ${num1_usuario} por ${num2_usuario} es ${mult}."')
        break;
    case operacion = 'división':
        let div = num1_usuario / num2_usuario
        console.log("La división de ${num1_usuario} entre ${num2_usuario} es ${div}.");
        break;
    case operacion:
        console.log('Revisa la ortografía de tu entrada.');
        break;       
}


