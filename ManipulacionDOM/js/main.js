document.getElementById("btn-log-in").addEventListener("click", function () {
  document.getElementById("form-sign-in").classList.toggle("oculto");
  document.getElementById("form-log-in").classList.toggle("oculto");

  if (
    document.getElementById("form-sign-in").classList.toggle("activo") == !true
  ) {
    document.getElementById("form-log-in").classList.toggle("activo");
    document.getElementById("form-sign-in").classList.toggle("oculto");
  } else {
    document.getElementById("form-log-in").classList.toggle("activo");
    document.getElementById("form-sign-in").classList.toggle("activo");
  }
});

document.getElementById("btn-sign-in").addEventListener("click", function () {
  document.getElementById("form-sign-in").classList.toggle("oculto");
  document.getElementById("form-log-in").classList.toggle("oculto");
  if (
    document.getElementById("form-log-in").classList.toggle("activo") !== true
  ) {
    document.getElementById("form-sign-in").classList.toggle("oculto");
  } else {
    document.getElementById("form-log-in").classList.toggle("activo");
    document.getElementById("form-sign-in").classList.toggle("activo");
  }
});
