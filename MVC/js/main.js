/**
 * Modelo -> Datos (Base de datos)
 * -> Arreglos y objetos (Estructuras de datos)
 * Controlador -> Logica de negocio
 * Vista -> Interfaz grafica
 *
 * Arreglos
 * Arreglos unidimensionales (Vectores)
 * -> Vectores en el eje X o Y
 * Arreglos bidimensionales (Matrices)
 * -> Vectores en el eje X e Y
 *
 * Un arreglo es una coleccion de datos (variables, funciones, numeros, textos, booleanos, null, undefined, etc)
 * Almacenados en un mismo espacio de memoria
 *
 * Los arreglos en JavaScript siempre seran dinamicos
 */

/* let variasCosas = ["Jaime", 33, true, function () {}, null, undefined];
console.log(variasCosas[1]);
 */
/* 
Tamaño: Se define por la cantidad existentes en el arreglo
Posicion: Ubicacion de un elemento dentro de un arreglo(La posicion inical sera 0)
*/

/* Metodos de arreglos
Metodos mutables -> Funciones que modifican el arreglo original
-> push(): Metodo o funcion que agrega un elemento al final del arreglo
-> unshift: Metodo o funcion que agrega un elemento al inicio del arreglo
-> pop(): Metodo o funcion que elimina la ultima posicion de un arreglo
-> shift(): Metodo o funcion que elimina la primera posicion de un arreglo
-> splice(): Metodo o funcion que elimina un objeto (cualquiera) de un arreglo bajo una condicion dada
-> sort(): Metodo o funcion que ordena el contenido de un arreglo de forma ascendente o alfambeticamente

Metodos no mutables: Funciones que no modifican el arreglo original
-> map(): Metodo que recorre un arreglo, lo transforma segun la condicion (iterar sobre todos los elementos y retorno un nuevo arreglo)
-> slice(): Metodo o funcion para eliminar un elemento (cualquiera) de un arreglo bajo una condicion dada- Funciona para extraer un valor o valores de un arreglo
-> find(): Metodo que recorre un arreglo y retorna un elemento segun una condicion (solo retorna el primer elemento que cumpla con la condicion)
-> forEach(): Metodo que hace casi lo mismo que el map, solo que no retorna un nuevo arreglo
-> filter(): Metodo que recorre un arreglo y retorna un nuevo arreglo segun una condicion (retorna todo lo que cumpla con la condicion)
-> some(): Metodo que recorre un arreglo y retorna true o false segun una condicion (solo retorna el primer elemento que cumpla con la condicion)
-> reduce(): Metodo reduce que recorre un arreglo y reduce el contenido del mismo a un unico valor
-> every(): Metodo que recorre un arreglo y retorna true o false segun una condicion (solo retorna true si todos los elementos dentro del arreglo cumplen la condicion)
 */
// metodo map() Recorre todo el arreglo y trabaja todos los elementos del arreglo
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let paresResultado = numeros.map(function (numero) {
  if (numero % 2 == 0) {
    return numero;
  } 
});

console.log(paresResultado);


// Metodo forEach() no es necesario un retorno
/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.forEach(function(numero){
  if (numero % 2 == 0) {
    
    console.log(numero + 10);
}});
console.log(numeros); */

// Metodo filter()
/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultadoFilter = numeros.filter(function(numero){
  if (numero % 2 == 0) {
    return numero + 10;
  } 
})

console.log(resultadoFilter); */

/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultadoFind = numeros.find(function (numero){
  if (numero % 2 == 0) {
    return numero;
  } 
})

console.log(resultadoFind); */

// Metodo some()

/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultadoSome = numeros.some(function (numero) {
  if (numero % 2 == 0) {
    return numero;
  }
});

console.log(resultadoSome); */


// Metodo every()

/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultadoEvery = numeros.every(function (numero) {
  if (numero % 2 == 0) {
    return numero;
  }
});

console.log(resultadoEvery); */

//Metodo reduce()

/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultadoReduce = numeros.reduce(function (acumuladorNumero, valorNumero) {
  console.log(acumuladorNumero,valorNumero);
  return acumuladorNumero + valorNumero
});

console.log(resultadoReduce); */

/* push */
/* let numeros = [1, 2];
//push()
console.log(numeros);
numeros.push(3);
console.log(numeros);
numeros.push(4);
numeros.push(5);
console.log(numeros);
//unshit()
numeros.unshift(-1);
console.log(numeros);
numeros.unshift(-2);
numeros.unshift(-3);
//pop()
numeros.pop();
console.log(numeros);
numeros.shift();
console.log(numeros); */

/* Se debe conocer la posicion a eliminar
Para eliminar me recibe dos argumentos:
Primer argumento sera la posicion
Segundo argumento sera la cantidad de elementos a elimar  
splice()
numeros.splice(2, 2);
console.log(numeros);
*/
/* let Balde = [];
for (let i = 1; i <= 10; i++) {
  let numero = prompt(´´);
  if (numero % 2 === 0) {
    
    numero.unshift()
    
  } else {
    console.log("Es un número impar");
  }
}
 */
/* const PARES = []
while (PARES.length < 10 ) {
    let numero
    do{
if (numero % 2 === 0) {
      console.log(`${numero} es par. Total pares: ${numerosPares.length}`);
    } 
}while (numero % 2!==0)
    PARES.push(numero)
}  */
