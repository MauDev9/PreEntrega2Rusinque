
let carrito = [];
let total = 0;
let pizzas = [
    { nombre: "Pizza de peperoni", valor: 17000, stock: 5 },
    { nombre: "Pizza de hongos", valor: 16000, stock: 5 },
    { nombre: "Pizza de parrilla", valor: 18000, stock: 5 },
    { nombre: "Pizza de queso", valor: 19000, stock: 5 },
    { nombre: "Pizza de tomate", valor: 20000, stock: 5 },
    { nombre: "Pizza de tocino", valor: 17500, stock: 5 },
];

let ingredientes = [
    "queso mozzarella ", "tomate ", "pepperoni ", "champiñones ", "pimientos ",
    "aceitunas ", "chorizo ", "cebolla ", "albahaca ", "salami "
];

//

//Mediante este bloque de codigo podremos utilizar la barra de busqueda para filtrar la busqueda de una pizza por su nombre exacto.
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
searchBar.addEventListener('input', filtrarPizzas);
searchButton.addEventListener('click', buscarPizzas);

function filtrarPizzas() {
    const textoBusqueda = searchBar.value.toLowerCase();
    const pizzasFiltradas = pizzas.filter(pizza => pizza.nombre.toLowerCase().includes(textoBusqueda));
    mostrarPizzasFiltradas(pizzasFiltradas);
}

function mostrarPizzasFiltradas(pizzasFiltradas) {
    console.log(pizzasFiltradas);
}

function buscarPizzas() {
    const textoBusqueda = searchBar.value.toLowerCase();
    const pizzasFiltradas = pizzas.filter(pizza => pizza.nombre.toLowerCase().includes(textoBusqueda));

    if (pizzasFiltradas.length > 0) {
        const disponibilidad = pizzasFiltradas.map(pizza => `${pizza.nombre} - Disponible`).join('\n');
        alert(`Si está disponible:\n${disponibilidad}`);
    } else {
        alert(`Lo sentimos :/ , no tenemos: ${textoBusqueda}`);
    }
}



//Bloque de codigo para agregar pizzas al carrito.
const botonesOrdenar = document.querySelectorAll('.button-agg-carrito');
    
    botonesOrdenar.forEach(function(boton, index) {
        boton.addEventListener('click', function() {
            agregarAlCarrito(pizzas[index]);
        });
    });

function agregarAlCarrito(pizza) {
    if (pizza.stock > 0 && carrito.length <= 6) {
        carrito.push(pizza);
        pizza.stock--;
        total += pizza.valor;
        alert(`¡${pizza.nombre} ha sido agregada al carrito!`);
        actualizarCarrito();
    }else if (carrito.length > 6){
        alert('Lo siento, solo puedes agregar un máximo de 6 pizzas al carrito.');
    } else {
        alert(`Lo sentimos :/ , no hay stock disponible para ${pizza.nombre}`);
    }
}

//Actualizar carrito con items y precio y apagar.
function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const totalElemento = document.getElementById('total');
    const cantidadPorPizza = {};

    // Contar la cantidad de cada pizza en el carrito
    carrito.forEach(function(item) {
        if (cantidadPorPizza[item.nombre]) {
            cantidadPorPizza[item.nombre]++;
        } else {
            cantidadPorPizza[item.nombre] = 1;
        }
    });

    // Limpiar la lista del carrito antes de actualizar
    carritoLista.innerHTML = '';

    // Agregar cada elemento del carrito a la lista con la cantidad correspondiente
    for (const nombrePizza in cantidadPorPizza) {
        const cantidad = cantidadPorPizza[nombrePizza];
        const listItem = document.createElement('li');
        listItem.textContent = `${nombrePizza} - Cantidad: ${cantidad} - Precio: ${cantidad * pizzas.find(pizza => pizza.nombre === nombrePizza).valor}`;
        carritoLista.appendChild(listItem);
    }

    // Actualizar el total
    totalElemento.textContent = total;
}





// Botón para limpiar el carrito
const limpiarButton = document.getElementById('limpiar-button');
limpiarButton.addEventListener('click', limpiarCarrito);

function limpiarCarrito() {
    // Restaurar el stock de pizzas
    pizzas.forEach(pizza => (pizza.stock += carrito.filter(item => item.nombre === pizza.nombre).length));

    // Limpiar el carrito y reiniciar el total
    carrito = [];
    total = 0;

    // Actualizar la interfaz
    actualizarCarrito();
    alert("¡El carrito ha sido limpiado!");
}

// Botón para finalizar la compra
const finalizarButton = document.getElementById('finalizar-button');
finalizarButton.addEventListener('click', finalizarCompra);

function finalizarCompra() {
    // Mensaje de agradecimiento y total a pagar
    if(total === 0){
        alert('Oh, que mal que no vayas a comprar nuestras deliciosas pizzas.')
    }else{
        alert(`¡Gracias por tu compra! Esperamos que disfrutes de nuestras deliciosas pizzas.\nTotal a pagar: $${total}`);
    }
}