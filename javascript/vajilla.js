/* let productos = [
    {
        "id":"001",
        "nombre":"Cuenco blanco",
        "precio":700,
        "img":"images/cuenco.jpg",
        "desc":""
    },
    {
        "id":"002",
        "nombre":"Cuenco gris",
        "precio":700,
        "img":"images/cuencogris.jpg",
        "desc":""
    },
    {
        "id":"003",
        "nombre":"Cuenco verde agua",
        "precio":700,
        "img":"images/cuenco2.jpg",
        "desc":""
    },
    {
        "id":"004",
        "precio":600,
        "nombre":"Bowl sandia",
        "img":"images/bowlsandia.jpg",
        "desc":""
    },
    {
        "id":"005",
        "nombre":"Bowl gris",
        "precio":600,
        "img":"images/bowls.jpg",
        "desc":""
    },
    {
        "id":"006",
        "nombre":"Bowl azul",
        "precio":600,
        "img":"./images/bowlazul.jpg",
        "desc":""
    },
    {
        "id":"007",
        "nombre":"Taza blanca",
        "precio":650,
        "img":"./images/Taza.jpg",
        "desc":""
    },
    {
        "id":"008",
        "nombre":"Taza de mono",
        "precio":700,
        "img":"./images/tazamono.jpg",
        "desc":""
    },
    {
        "id":"009",
        "nombre":"Taza de cangrejo",
        "precio":700,
        "img":"./images/tazacangrejo.jpg",
        "desc":""
    },
];

let carrito;

if(JSON.parse(localStorage.getItem('carrito'))) {
    carrito= JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

function desplegarProductos() {

    for (let i =0; i < productos.length; i++) {
        const element = productos [i];
        const { id, nombre, precio, img} = element
        const card = `
        <div class= 'card'>
            <p> ${nombre}</p>
            <div>
                <img class='imgProducto' src =${img} alt=''/>
            <div>
            <div class="btn-container">
                <button id=${id} class='btnAgregar'> AGREGAR AL CARRITO </button>
            <div>
        <div>
        `
        const container = document.getElementById ('container')
        container.innerHTML += card
    }
}

const btnAgregar =document.getElementsByClassName('btnAgregar')

for ( let i = 0; i < btnAgregar.length; i++) {
   const element = btnAgregar[i];
   element.addEventListener('click', agregarAlCarrito) 
}

desplegarProductos()

function agregarAlCarrito(e) {
    const btn = e.target;
    const idBoton = btn.getAttribute ('id')
    const prodEncontrado = productos.find(prod = prod.id == idBoton)
    const encarrito = carrito.find (prod => prod.id == prodEncontrado.id)
    console.log(enCarrito)
    if(!enCarrito) {
        carrito.push({...prodEncontrado, cantidad: 1})
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != enCarrito.id)
        carrito = [...carritoFiltrado, {...enCarrito, cantidad: enCarrito.cantidad + 1}]
    } 
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const contador = document.getElementById('contador')
contador.innerHTML = carrito.length */

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');
  
   const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
       let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    } 
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}
