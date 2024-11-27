// Escriba una función llamada letterFinder que acepte dos parámetros: word y match.

function encontrar_carta(palabra, match) {
 /* Codifique un bucle 'for' dentro de la estructura de la función. 
 El contador del bucle for debe comenzar en cero, incrementarse 
 en 1 en cada iteración y salir cuando el valor de la variable 
 del contador sea igual a la longitud del parámetro word. */
    for(i = 0; i < palabra.length; i++) {
 /* Agregue una declaración if dentro del bucle for cuya condición funcione de la siguiente manera:
Acceda a cada una de las letras dentro de la palabra  pasada usando la variable contador, con word[i]. 
Compruebe si word[i] actual es igual al valor de match. */
        if (palabra[i] == match) {
/* La consola registra lo siguiente dentro de la estructura de la declaración 
if: console.log('Found the', match, 'at', i). */
            console.log('Encontré el match ', 'con', i)
/* Escriba la condición else. Aquí solo registrará 
en la consola lo siguiente: console.log('---No match found at', i). */
        } else {
            console.log('-------No se encontró con', i)
        }
    }
/* Llame al letterFinder y pase su primer argumento 
como la cadena "test" y como segundo argumento, la cadena "t".*/
}

encontrar_carta('test','t')