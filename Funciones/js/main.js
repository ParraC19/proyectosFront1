function calcularSalarioBruto(valorHora, cantidadHoras) {
  let salarioBruto = valorHora * cantidadHoras;
  console.log("Salario bruto del trabajador: " + salarioBruto);
  return salarioBruto;
}
function calcularHorasExtras(cantidadHoras) {
  const LIMITE_HORAS = 44;
  if (cantidadHoras > LIMITE_HORAS) {
    console.log(
      "La cantidad de horas es de: " + (cantidadHoras - LIMITE_HORAS)
    );
  }
}
function calcularDeducciones(retornoSalarioBruto) {
  let valorDeduccion = retornoSalarioBruto * 0.08;
  console.log("Las deducciones por salud y pension son: " + valorDeduccion);
  return valorDeduccion;
}

function calcularSalarioNeto(retornoDeduccion, retornoSalarioBruto) {
  let salarioNeto = retornoSalarioBruto - retornoDeduccion;
  console.log("Salario neto correspondiente: " + salarioNeto);
}

function menuPrincipal() {
  let repetir = true;
  let opcion = "";
  while (repetir) {
    let valorHora = Number(prompt("Ingrese el valor de la hora:"));
    let cantidadHoras = Number(prompt("Ingrese la cantidad de horas:"));
    opcion = prompt(
      "Seleccione:\n1. Calcular salario bruto\n2. Calcular horas extras\n3. Calcular deducciones\n4. Salario neto"
    );
    if (opcion == "1") {
      calcularSalarioBruto(valorHora, cantidadHoras);
    } else if (opcion == "2") {
      calcularHorasExtras(cantidadHoras);
    } else if (opcion == "3") {
      let retornoSalarioBruto = calcularSalarioBruto(valorHora, cantidadHoras);
      calcularDeducciones(retornoSalarioBruto);
    } else if (opcion == "4") {
      let retornoDeduccion = calcularDeducciones();
      calcularSalarioNeto(
        retornoSalarioBruto,
        retornoDeduccion,
        retornoHoraasExtra
      );
    }

    opcion = prompt("¿Desea continuar en la aplicacion?\n1. Si\n2. No");
    if (opcion == "2") {
      repetir = false;
    }
  }
}
menuPrincipal();
