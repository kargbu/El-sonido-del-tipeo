/* Realiza una declaración if else que determine su fuente de ingresos en función de su edad.*/

//1. Declare una variable de edad usando la palabra clave var y configúrela en el número 10.
// 2. Agregue una declaración if que verifique si el valor de la variable edad es mayor o igual al número 65.
// 3. Dentro del bloque if, console.log la oración: “Usted obtiene sus ingresos de su pensión”.
// 4. Agregue “else if”, donde verificará si el valor de la edad es menor a 65 y mayor o igual a 18.
// 5. Dentro de este bloque de “else if”, escriba “console.log” y luego “Cada mes recibe un salario”.
// 6. Agregue otro “else if”, y esta vez verifique si el valor de la edad es menor de 18 años.
// 7.  Dentro del bloque “else if”, escriba “console.log” y luego “Obtiene una asignación”.
// 8. Agregue una declaración “else” para capturar cualquier otro valor. 
// 9. Dentro del bloque, escriba “console.log” y luego “El valor de la variable edad no es numérico”.
// 10. Intente ajustar la edad y ejecute el programa para ver cómo afectará el resultado.

var edad = 15;
if (edad >= 65) {
    console.log('Usted tiene una pensión.');
} else if (edad >= 18 && edad < 65) {
    console.log('Usted es asalariado.');
} else if (edad >= 10 && edad < 18) {
    console.log('Usted obtiene una mesada.');
} else {
    console.log('El valor de la variable edad no es numérica o eres un niño.')
}

















