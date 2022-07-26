function validarFormulario(formulario) {
  let miFormulario = document.getElementById("formulario");
  miFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.getElementById("Nombre").value;
    console.log(nombre);
  });
}
