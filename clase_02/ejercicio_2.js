/* También podrá escribir una declaración switch que determine su rutina nocturna según el día de la semana.
1. En la siguiente línea, defina una nueva variable, asígnele el nombre day y establezca su valor en “Domingo”.
2. Comience a codificar una declaración switch y pase la variable day como la expresión para evaluar.

En switch, agregue casos para cada día de la semana, comenzando con 'Lunes' y terminando con 'Domingo'. Asegúrese de usar valores de cadena para los días. En cada caso, por ahora, simplemente agregue console.log('Do something') y agregue un salto; en la línea de abajo.

En la parte inferior de la declaración switch, agregue el caso predeterminado y añada console.log('There is no such day').

Por último, actualice las llamadas de console.log para cada caso, según la actividad que tenga en cada uno de los días.*/

var dia = 'viernes';
switch(dia) {
    case 'domingo':
        console.log('Me duermo a las 10 p. m.')
    break;
    case 'lunes':
        console.log('Me duermo a las 9 p. m.');
    break;
    case 'martes':
        console.log('Me duermo a las 10 p. m. Tengo curso de programación.');
    break;
    case 'miércoles':
        console.log('Me duermo en la madrugada. Tengo curso de FLACSO.');
    break;
    case 'jueves':
        console.log('Me duermo a las 10 p. m. Tengo curso de programación.')
    break;
    case 'viernes':
        console.log('Salgo por una cerveza.');
    break;
    case 'sábado':
        console.log('Veo una película con mi novio.')
    break;
    default:
        console.log('Se acabó la semana.')
}
