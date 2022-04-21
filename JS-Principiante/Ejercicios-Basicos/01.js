// /* 
// Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio
// total que vas a pagar por tu compra.

// Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio
// por el iva y dividirlo por 100.

// precio: 100 iva:21  total  121
// */
// let precio = 100;
// let iva = 21;
// let resultado = 0;

// console.log("El total a pagar es: " + (resultado = precio + ((precio*iva)/100)));

// /* 
// En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área
// y el perimetro del cuadrado.

// El area la calculas como lado*lado; El perimetro es la suma de todos sus lados.

// lado: 40    area es: 1600   perimetro es: 169
// */
// let lado = 40;

// console.log("El area del cuadrado es: " + (lado*lado));
// console.log("El perimetro del cuadrado es: " + (lado*4));

// /* 
// En este ejercicio debes escribir un programa que lea el nombre del usuario y salude
// con un "Hola" seguido del nombre del usuario.

// Para leer el nombre usa un prompt con un texto indicativo
// */
// let nombre = prompt("Escribe tu nombre: ");
// console.log("Hola " + nombre);

// /* 
// En este ejercicio vas a pedir al usuario que teclee 3 numeros enteros y el script
// mostrara como resultado el valor medio de los 3.

// Recuerda que la media de 3 numeros se calcula sumando los 3 y dividiendo entre 3.
// */
// let num1 = parseInt(prompt("Ingresa un número: "));
// let num2 = parseInt(prompt("Ingresa otro número: "));
// let num3 = parseInt(prompt("Ingresa un ultimo número: "));
// let media = (num1+num2+num3)/3;
// console.log("La media de los números es: " + media);

// /* 
// Escribe un programa que solicite al usuario ingresar el número de litros consumidos por su coche,
// luego le pide el número de kilómetros recorridos. El script debe mostrar el consumo de combustible
// por kilometro.

// Un problema matematico muy simple numero de litros dividido por numero de kilometros
// */
// let litros = parseFloat(prompt("Ingresa el número de litros: "));
// let kilometraje = parseFloat(prompt("Ingresa la cantidad de kilómetros recorridos: "));
// let consumo = litros/kilometraje;
// console.log("El total consumido es: " + consumo);

/* 
Cambio de unidades. En este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

Recuerda 1hr son 60min y 1min son 60seg
*/
// let hora = parseInt(prompt("Ingresa el número de la hora: "));
// let minutos = parseInt(prompt("Ingresa el número de minutos: "));

// let horaMinutos = (hora*60)*60;
// let segundos = horaMinutos + minutos*60;

// console.log("La conversion de la hora y minutos ingresados a segundos es: " + segundos);
