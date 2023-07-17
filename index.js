const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 400,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log("Ejercicio 1: Las pizzas que tengan un id impar.")
//Sintaxis flecha
pizzas.forEach(pizza => {
  if (pizza.id % 2 !==0) {
    console.log("La " + pizza.nombre + " tiene un id impar, su id es:" + pizza.id)
  }
}
)

console.log("----------------------------------------")
console.log("Ejercicio 2: ¿Hay alguna pizza que valga menos de $600?")

/*VER METODO FILTER*/

pizzas.forEach((pizzaBarata) => {
  if (pizzaBarata.precio < 600) {
    console.log("La " + pizzaBarata.nombre + " vale menos de $600")
  }
}
)

console.log("----------------------------------------")
console.log("Ejercicio 3: El nombre de cada pizza con su respectivo precio")
console.log("Nombre y Precio de las pizzas:")
pizzas.forEach(pizzaPrecio =>{
  console.log(pizzaPrecio.nombre + " - " + " Precio: $" + pizzaPrecio.precio)
}
)

console.log("----------------------------------------")
console.log("Ejercicio 4: Todos los ingredientes de cada pizza") 
/*Hay que recorrer el array de pizzas y adentro recorrer el array de ingredientes
En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).
 Hay que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" 
 cuyo valor es un array con ingredientes.*/
console.log('Los ingredientes de cada pizza son:');
    pizzas.forEach(pizza => {
      console.log("Los ingredientes de la " + pizza.nombre + " son:");
      pizza.ingredientes.forEach(ingrediente => {
        console.log(ingrediente);
      });
      console.log('------------------');
    }
    )
  