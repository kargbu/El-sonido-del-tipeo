// Programar una función que reciba de usurio dos números como parámetros y devuelva el número mayor
const prompt = require('prompt-sync')();

let num_1 = parseFloat(prompt('Ingresa un número: '));
let num_2 = parseFloat(prompt('Ingresa otro número: '));

function num_mayor (num_1, nume_2) {
    if (num_1 < num_2) {
        console.log (`El número ${nume_2} es mayor estricto que ${num_1}.`);
        return num_2;
    } else if (num_2 < num_1) {
        console.log(`El número ${num_1} es mayor estricto que ${nume_2}.`);
        return num_1;
    } else {
        console.log(`El númreo ${num_1} es igual al ${num_2}.`);
        return num_1;
    }

}
console.log(`El número mayor o igual es ${num_mayor(num_1,num_2)}`);