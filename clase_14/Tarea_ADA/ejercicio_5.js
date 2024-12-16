/*
Verificar el origen del auto
1. Solicita al usuario ingrese la marca de un auto.
2. Utiliza una función flecha para verificar y mostrar si el auto es de origen nacional o importado.
3. Considera que la marca Chevrolet, Ford y Fiat son nacionales.
*/
const prompt = require('prompt-sync')();

let info_usuario = prompt('Ingresa la marca del automóvil: ');

let verificar_marca = () => {
    switch (info_usuario.toLowerCase()) {
        case 'chevrolet':
        case  'ford':
        case 'fiat':
            console.log (`La marca ${info_usuario} es nacional`);
            break;
        default:
            console.log(`La marca ${info_usuario} es extranjera`);
            break;
    }
}
verificar_marca();
