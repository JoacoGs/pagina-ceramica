function solicitarNombre () {
    let nombreIngresado = prompt ("Ingresar nombre");
    
    let apellidoIngresado = prompt ("Ingresar apellido");

    if ((nombreIngresado !="") && (apellidoIngresado !="")) {
        alert("Nombre: "+ nombreIngresado + "\nApellido: "+apellidoIngresado);
    } else {
        alert("Error: Ingresar nombre y apellido");
    }   
}

solicitarNombre ();

/* calculando precio final
 */
const suma = (a,b) => a + b
const resta = (a,b) => a - b    
const iva = x => x * 0.21
let precioProducto = 750
let descuento = 50
let nuevoPrecio = resta(suma(precioProducto, iva (precioProducto)), descuento)
console.log (nuevoPrecio)