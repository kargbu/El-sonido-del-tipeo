/* Este programa es un juego de RPG, donde cada
persona tiene ciertos niveles de habilidad en 
función del valor guadado en su puntuación */

var score = 8;
console.log('Mid-level skills:', 0 < score && score < 10);

/* Codificar algunos fragmentos para las condiciones
finales del juego */

var timeRemaining  = 0;
var energy         = 10;
var gameOver = timeRemaining == 0 || energy == 0;
console.log('Game over:', gameOver)

/* Programar donde se escoja un número y determine
si es un número par */

var num1    = 2;
var num2    = 5;
var test1   = num1 % 2;
var test2   = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log(test1);
console.log(test2);
console.log('Is', num1, 'an even number?', result1);
console.log('Is', num2, 'an even number?', result2);

/* Sumar dos números */
console.log(5 + 10)

/* Concatenar números y cadenas usando el operador + */

var nowIn  = 'Now in ';
var threes = 3;
var datos  = "D!";
console.log(nowIn + threes + datos)

/* Usar el operador += para acumular valores en una variable */

var counter = 0;
counter += 5;
counter += 3;
console.log(counter)

