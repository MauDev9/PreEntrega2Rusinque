
let carrito = [];

let pizzas = [
    { nombre: "Pizza de peperoni", valor: 17000, stock: 5 },
    { nombre: "Pizza de hongos", valor: 16000, stock: 5 },
    { nombre: "Pizza de parrilla", valor: 18000, stock: 5 },
    { nombre: "Pizza de queso", valor: 19000, stock: 5 },
    { nombre: "Pizza de tomate", valor: 20000, stock: 5 },
    { nombre: "Pizza de tocino", valor: 17500, stock: 5 },
];

let ingredientes = [
    "Queso mozzarella ", "Tomate fresco ", "Pepperoni ", "Champiñones ", "Pimientos ",
    "Aceitunas ", "Jamón ", "Cebolla ", "Albahaca ", "Salsa de tomate "
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
    if (pizza.stock > 0) {
        carrito.push(pizza);
        pizza.stock--;
        alert(`¡${pizza.nombre} ha sido agregada al carrito!`);
    } else {
        alert(`Lo sentimos :/ , no hay stock disponible para ${pizza.nombre}`);
    }
}



