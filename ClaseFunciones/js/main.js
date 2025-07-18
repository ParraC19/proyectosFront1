/* Funcion regular declarativa 
function -> Palabra reservada para definir una funcion
nombreFuncion -> Nombre de la funcion
() -> Espacio para los parametros de la funcion
 {} -> Bloque de codigo a ejecutar
*/
/* let numero1
let numero2

numero1 = Number(prompt("Escriba un numero para sumar"))
numero2 = Number(prompt("Escriba otro numero para sumar"))
function sumarNumeros() { Definicion de una funcion
    console.log("La suma es: " + (numero1+numero2))
}

sumarNumeros() /* Invocacion de la funacion */

/* Funcion de expresion
let, var o const -> Tipo de variable
nombreVariable -> Sera el nombre de la funcion
function -> Palabra reservada para definir una funcion
() -> Espacio para los parametros de la funcion
 {} -> Bloque de codigo a ejecutar
*/

/* let restar = function(){
    console.log("La resta es: " + (5-3))
}
restar() */

/* 
Funcion flecha
let multiplicar = ( ) => {
    console.log("La resta es: " + (5-3))
}
 */
import { sumarNumeros, restar, multiplicar } from "./funcionesMatematicas.js";
let numero1;
let numero2;
let opcion = Number(
  prompt("Elige una opcion: \n1. Sumar \n2. Restar \n3. Multipllicar")
);
switch (opcion) {
  case 1:
    numero1 = Number(prompt("Escriba un numero para sumar"));
    numero2 = Number(prompt("Escriba otro numero para sumar"));
    sumarNumeros(numero1, numero2);
    break;

  case 2:
    numero1 = Number(prompt("Escriba un numero para sumar"));
    numero2 = Number(prompt("Escriba otro numero para sumar"));
    restar();
    break;

  case 3:
    numero1 = Number(prompt("Escriba un numero para sumar"));
    numero2 = Number(prompt("Escriba otro numero para sumar"));
    multiplicar();
    break;
}
