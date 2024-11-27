//
var result = 50;
if (result > 40) {
    console.log('Estamos programando.');
}
else {
    console.log('No he aprendido nada.');
}

// Varios condicionales

var place = 'primero';

if (place == 'primero') {
    console.log('oro')
} else if (place == 'segundo') {
    console.log('plata')
} else if (place == 'tercero') {
    console.log('bronce')
} else {
    console.log('Sin medalla')
}

// Lo hacemos con switch

var medalla = 'primer lugar';

switch(medalla) {
    case 'primer lugar':
        console.log('Oro');
        break;
    case 'segundo lugar':
        console.log('Plata');
        break;
    case 'tercer lugar':
        console.log('Bronce');
        break;
    default:
        console.log('Eres un perdedor')
}

// La diferencia es una cuestión estilistica, switch se usa cuando hay muchos casos.