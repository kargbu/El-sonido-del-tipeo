/*
Encuentra los números pares de una lista dada. Guardar los números pares en una lista aparte.
Finalmente, imprime la nueva lista.
*/

const lista_num = [1, 2, 3, 4, 5, 6];
console.log(lista_num);

const lista_pares = lista_num.filter(function(num_par){
    return num_par % 2 == 0;
});
console.log(lista_pares);