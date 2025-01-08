/*
Calcula la suma total de la lista de números [1, 2, 3, 4].
*/

const lis_num = [1, 2, 3, 4];

const sum_num = lis_num.reduce(function(acum, num){
    return acum + num;
});

console.log(`La suma de los números ${lis_num} es igual a ${sum_num}.`);