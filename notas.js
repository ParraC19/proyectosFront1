let frutas = ["naranja", "banana", "limon", "sandia", "aguacate"]
frutas.push("manzana")
console.log(frutas);

frutas.shift()
console.log(frutas);

frutas.pop()
console.log(frutas);

frutas.unshift("tomate")
console.log(frutas);


let frutasConA = frutas.filter(fruta => fruta.includes("a") )
console.log(frutasConA);

let frutas2 = ["pera", "mora","piña"]
let todsLasFrutas = frutas.concat(frutas2)
console.log(todsLasFrutas);

todsLasFrutas.reverse()
console.log(todsLasFrutas);

todsLasFrutas.sort()
console.log(todsLasFrutas);









