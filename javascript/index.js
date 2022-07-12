/* function solicitarNombre() {
  let nombreIngresado = prompt("Ingresar nombre");

  let apellidoIngresado = prompt("Ingresar apellido");

  if (nombreIngresado != "" && apellidoIngresado != "") {
    swal.fire({
      text: "Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado,
      icon: "success",
    });
  } else {
    swal.fire({
      text: "Error: Ingresar nombre y apellido",
      icon: "error",
    });
  }
}
solicitarNombre(); */

/* sumando cantidad de productos
 */

let resultado = 0;
function sumar(producto1, producto2, prodcuto3, producto4) {
  resultado = producto1 + producto2 + prodcuto3 + producto4;
}

sumar(2, 3, 1, 5);
console.log(resultado);

/* calculando precio final
 */
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
let precioProducto = 750;
let descuento = 50;
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio);

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  mostrarProducto() {
    return this.nombre;
  }
}

const producto1 = new Producto("Cuenco blanco", 750);
const producto2 = new Producto("Taza blanca", 600);
const producto3 = new Producto("Mate gris", 550);

class DetallePedido {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
  calcularSubTotal() {
    let subtotal = this.producto.precio * this.cantidad;
    return subtotal;
  }
  mostrarDetalle() {
    return "--" + this.cantidad + "x" + this.producto.mostrarProducto();
  }
}

const detallePedido1 = new DetallePedido(producto1, 3);
const detallePedido2 = new DetallePedido(producto2, 2);
const detallePedido3 = new DetallePedido(producto3, 1);

class Pedido {
  constructor(fecha, detalles) {
    this.fecha = fecha;
    this.detalles = detalles;
  }
  calcularTotal() {
    let total = 0;
    for (const dp of this.detalles) {
      total = total + dp.calcularSubTotal();
    }
    return total;
  }
  mostrarPedido() {
    let texto = "";
    for (const dp of this.detalles) {
      texto += dp.mostrarDetalle() + "\n";
    }
    texto += this.calcularTotal();
    return texto;
  }
}

const array = [];
array.push(detallePedido1);
array.push(detallePedido2);
array.push(detallePedido3);

const pedido1 = new Pedido(new Date(), array);

console.log(pedido1.mostrarPedido());

const inventario = ["Tazas", "Bowls", "Mates", "Cuencos"];

console.log(inventario.includes("Mates"));
console.log(inventario.includes("Platos"));

/* const productos = [
  { id: 1, nombre: "Taza blanca", precio: 600 },
  { id: 2, nombre: "Cuenco blanco", precio: 700 },
  { id: 3, nombre: "Bowl gris", precio: 550 },
  { id: 4, nombre: "Taza Mono", precio: 650 },
];

for (const producto of productos) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p> Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
  document.body.appendChild(contenedor);
}
 */

/* Desestructuración de arrays */
const usuarios = ["Joaquin", "Jeronimo", "Marina"];

const [a, , b] = usuarios;

/* Spread de array */
console.log(...usuarios);
