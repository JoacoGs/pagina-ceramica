let nombreIngresado = prompt ("Ingresar nombre");
let apellidoIngresado = prompt ("Ingresar apellido");

if ((nombreIngresado !="") && (apellidoIngresado !="")) {
    alert("Nombre: "+nombreIngresado + "\nApellido: "+apellidoIngresado);
} else {
    alert("Error: Ingresar nombre y apellido");
}   

/* for (let i = 1; i <= 5; i++) {
    let ingresarNombre = prompt ("Ingresar nombre");
    alert ("Turno N°" +i+ "Nombre:" + ingresarNombre);
} */

let entrada = prompt ("Ingresar contraseña");
while (entrada !="contraseña") {
    alert ("La contraseña ingresada no es correcta");
    entrada =prompt ("Pruebe con 'contraseña'");
}
