/*Ciclo for
for (inicio, condicion, incremento){

}
El inicio debe de ser una variable tipo let o var
El incremento puede ser un operador unario (++ o --)
*/

/* let edad = 0;
let promedio = 0;
let acumulado = 0
let cantidadRepeticiones = parseInt(prompt("Ingrese la cantidad de repeticiones"))
for(let index = 0; index<cantidadRepeticiones; index++){
    edad = parseInt(prompt("Ingrese su edad: "))
    acumulado = acumulado + edad
    promedio = acumulado / cantidadRepeticiones
}
console.log("El promedio de edades es: " + promedio) */

/* Ciclo while
Inicio(Pregunta)
while(condicion){
    codigo a ejecutar
    incremente
} */
/* let edad = 0;
let promedio = 0;
let acumulado = 0
let cantidadRepeticiones = parseInt(prompt("Ingrese la cantidad de repeticiones"))
let index = 1 //Se define el indice afuera del ciclo
while (index<=cantidadRepeticiones) {
    edad = parseInt(prompt("Ingrese su edad: "))
    acumulado = acumulado + edad
    promedio = acumulado / cantidadRepeticiones
    index++
}
console.log("El promedio de edades es: " + promedio) */
/* let edad = 0;
let promedio = 0;
let acumulado = 0
let index=1
let cantidadRepeticiones = parseInt(prompt("Ingrese la cantidad de repeticiones"))
do {
    edad = parseInt(prompt("Ingrese su edad: "))
    acumulado = acumulado + edad
    index++
} while (index<=cantidadRepeticiones);
promedio = acumulado / cantidadRepeticiones
console.log("El promedio de edades es: " + promedio)  */

/* 
Ciclo controlado por: una bandera, centinela o int
*/

/* let repetir = true
while (repetir) {
    let opcion = prompt("Seleccopne: \n1 - repetir\n2 - Salir")
    if (opcion=="2") {
        repetir = false
    }
} */