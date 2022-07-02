/* Local Storage  */
const productos = [
  { id: 1, producto: "Bowl", precio: 800 },
  { id: 2, producto: "Cuenco", precio: 1000 },
  { id: 3, producto: "Taza", precio: 1000 },
];

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

for (const producto of productos) {
  guardarLocal(producto.id, JSON.stringify(producto));
}

guardarLocal("listaProductos", JSON.stringify(productos));

class Producto {
  constructor(obj) {
    this.nombre = obj.producto.toUpperCase();
    this.precio = parseFloat(obj.precio);
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}

const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productosCarrito = [];
for (const objeto of almacenados) productos.push(new Producto(objeto));
for (const producto of productos) producto.sumaIva();
/*  Termina Local Storage  */
