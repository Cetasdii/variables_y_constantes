/*Escribe un programa que le pregunte al usuario su nombre e imprima "Hola, " seguido
del nombre y un signo de exclamación.
Por ejemplo si el usuario ingresa "Pedro" el programa debe imprimir en la consola
"Hola, Pedro!".*/

let nombre = prompt("Ingrese su nombre");

let saludo = "Hola,";
let exclamación = "!";

let imprimir = saludo + "" + nombre + "" + exclamación;

console.log(imprimir);
