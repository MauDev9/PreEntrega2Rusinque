
// alert("Bienvenidos a la Pizzeria de Mauricio !")



/*let pizzas = document.getElementsByClassName("card");
console.log(pizzas[5].innerHTML);*/

/*function agregarAlCarrito(){

};*/

let ingredientes = [
    "Queso mozzarella ", "Tomate fresco ", "Pepperoni ", "Champiñones ", "Pimientos ",
"Aceitunas ", "Jamón ", "Cebolla ", "Albahaca ", "Salsa de tomate "
]
console.log(ingredientes)




const buildButton = document.getElementsByClassName('build-button');

buildButton.addEventListener('click', function armarPizza() {

    alert("Hola, asi que vas a armar tu propia pizza." + '\n'  + "A continaución te mostraré todos los ingredientes dispponibles "+ '\n' + ingredientes)
});

armarPizza();