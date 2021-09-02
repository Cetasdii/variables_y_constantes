/*Escribe un programa que le pida al usuario su nombre, año actual y año de nacimiento.
El programa debe imprimir su nombre y edad actual en la consola con la frase "Hola
Sergio, Tienes X años". Por ejemplo, asumiendo que el año actual es 2021 y el
usuario ingresa 2000, el programa debe imprimir en la consola:
Tienes 21 años
Por el momento no debemos preocuparnos si realmente no nos entrega la edad real ya
que más adelante seremos mucho más especificos con los meses para así obtener la
edad real.*/

let nombre = prompt("Ingrese su nombre");
let año_actual = prompt("Ingrese el año actual");
let año_naciciento = prompt("Ingrese su año de nacimiento");

let saludo = "Hola ";
let cadena1 = "Tienes ";
let cadena2 = " años";
let cadena3 = ",";

let edad = parseInt(año_actual) - parseInt(año_naciciento);

let imprimir =
  saludo + "" + nombre + "" + cadena3 + "" + cadena1 + "" + edad + "" + cadena2;

console.log(imprimir);
