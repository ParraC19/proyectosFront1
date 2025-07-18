/*
if -> Palabra reservada para definir una condicion
() -> Es un espacio que contiene la condicion a XPathEvaluator. (En caso, si o si tiene que ser true. La expresion puede ser un valor directo, o una comparacion entre 2 o mas expresiones)
{} -> Llaves que encierran el bloque de codigo que ejecutara si la condicion es verdadera.


if (true){
    console.log('Esto es verdad...')
}
*/

/*
Compuesto
else -> Palabra reservada que define el bloque de codigo que sse ejecutara si la condicion es falsa
{} -> Llaves que encierran el bloque de codigo que ejecutara si la condicion es falsa.

if (!true){
    console.log('Esto es verdad...')
} else {
    console.log('Esto es falso...')
}
*/

/*
Anidado
Agregar un condicional simpoe dentro de un compuesto


if (!true){
    console.log('Esto es verdad...')
} else if (!true) {
    console.log('Esto es falso...')
} else if (!true) {
    console.log('Respuesta por defecto')
} else if (!true) {
    console.log('Respuesta por defecto 2')
} else if (!true) {
    console.log('Respuesta por defecto 3')
}
*/

/*
Multiple
switch ->
let valor = prompt('Ingrese una opcion de 1 a 3')
switch (Number(valor)) {
    case 1:
        console.log('El valor es 1')
    break;
    
    case 2:
        console.log('eEl valor es 2')
    break;

    case '3':
        console.log('eEl valor es 3')
    break;

    default: 
        console.log('El valor no es ninguno de los anteriores')
    break;
}
*/

/*
Operador ternario
let estado = 5 > 6 ? "Esto es verdad" : "Esto es falso"
console.log(estado)

solo lo utilizo para mostrar un resultado 
*/
console.log(2 + "3");
