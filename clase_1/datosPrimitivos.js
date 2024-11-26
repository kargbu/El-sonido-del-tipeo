// Los datos primitivos son aquellos que representan un valor simple
// y no son objetos

// String
'Hola pinche mundo culero'
// Boolean
var b = (3 !== 3);
console.log (b)
// Undefined: indica que una variable no ha sido asignada a un valor
var puto;
console.log(puto)
// Null: representa la ausencia intencional de cualquier valor
b = null
console.log(b)
// Bight: permite representar números enteros grandes que esceden el límite de Number
const bigNumber = 1234567890123456789012345678901234567890;
console.log(bigNumber);
var otherBigNumber = BigInt('1234567890123456789012345678901234567890');
console.log(otherBigNumber);
// Symbol: representa un valor único y anónimo a menudo utilizado como identificador de propiedades de ejemplo
