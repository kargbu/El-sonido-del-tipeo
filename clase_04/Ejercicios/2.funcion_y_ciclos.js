// Declaración de matrices, ciclos y funciones

function recorrido_de_lista (arr) {
    for (i = 0; i < arr.length; i++){
        console.log(i + 1, arr[i]);
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
recorrido_de_lista(colors);