/*
Filtra nombres que empiecen con la letra 'A' dada una lista de nombres.
*/

const lista_nombre = ['Ana', 'Luis', 'Andrea', 'María'];

const nombres_con_A = lista_nombre.filter(function (nombre) {
    return nombre.startsWith('A');
});

console.log(nombres_con_A);