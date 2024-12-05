/*
Declara una variable global llamada hora_actual. Después crea una función declarada llamada
mostrar_saludo que imprima "Buenos días" si la hora es menor a 12, imprime "Buenas tardes",
si es menor a 18 que imprima "Buenas noches" en cualquier otro caso.
*/
 let hora_actual;

 function saludo (hora) {
    if (hora < 12) {
        return `Buenos días`;
    } else if (hora > 12 && hora < 18) {
        return `Buenas tardes`;
    } else
        return `Buenas noches`;

 }
let buenas = console.log(saludo(13));
console.log(`${buenas}`);