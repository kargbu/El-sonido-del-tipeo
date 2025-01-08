/*
Encuentra el número mayor a 10 de la dista dada.
*/

const list_num = [5, 8, 12, 20, 3];

const num_mayor_a_diez = list_num.filter(function(num){
    return  num > 10;
});

console.log(num_mayor_a_diez);