/* console.log(document.getElementById("formulario"));
let persona = {
  nombre: "Nicolas",
  apellido: "Parra",
};
// Objeto Literal 

let lbl_usuario = document.getElementById("lbl_usuario").textContent;
lbl_usuario = "Texto de javaScipt";
console.log(persona.nombre);

console.log(document.getElementById("lbl_usuario"));
console.log(lbl_usuario); */
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que se recargue la página
});
function iniciarSesion() {
  let usuario = document.getElementById("usuario").value;
  let password = document.getElementById("contraseña").value;
  if (usuario === "Nicolas" && password === "jeje") {
    console.log("Inicio sesion correcto y yo que me alegro");
  }
}
// Aquí va tu lógica personalizada
