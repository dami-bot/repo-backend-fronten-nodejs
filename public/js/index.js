/* const { default: Image } = require("next/image"); */
document.addEventListener("DOMContentLoaded", () => {
  fetch('api/productos')
    .then(response => response.json())
    .then(productos => {

const contenedorTarjetas = document.getElementById("productos-container");
/* 
function crearTarjetasProductosInicio(productos){ */
  productos.forEach(producto => {
    const nuevaBicicleta = document.createElement("div");
    nuevaBicicleta.classList.add = "tarjeta-producto";
    nuevaBicicleta.innerHTML= `
      <img src="img/${producto.urlimagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <button>Agregar al carrito</button>
    `
    contenedorTarjetas.appendChild(nuevaBicicleta);
    nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))
  });
})
})



 
/* getBicicletas().then(bicicletas => {
 crearTarjetasProductosInicio(bicicletas);
}) */