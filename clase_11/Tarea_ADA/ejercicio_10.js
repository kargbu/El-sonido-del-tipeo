/* Crea un programa donde la computadora seleccione un número al azar entre 1 y 10.
Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera
de los intentos, muestra un mensaje de felicitaciones y detén los intentos restantes. Si no acierta después
de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio. */

const prompt = require('prompt-sync')();

// Función para generar un número entero aleatorio entre min y max (ambos incluidos)
function obtener_entero_aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
