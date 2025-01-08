/*
Busca un nombre específico
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos
saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías
devolverlo.
*/

const lista_nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];
function buscarNombre(nombre, regresa) {
     const encontrado = lista_nombres.includes(nombre);
    regresa(encontrado, nombre);
 } buscarNombre('Laura', function(encontrado, nombre) {
     if (encontrado) {
         console.log(`El nombre ${nombre} está en la lista.`);
         } else { console.log(`El nombre ${nombre} no está en la lista.`);
         } 
        });
