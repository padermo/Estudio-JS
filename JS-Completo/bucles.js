//while
//en el while debe cumplirse la condicion antes de ejecutar las instrucciones
let contador = 0;
while (contador <=10) {
    console.log("While " + contador);
    contador++;
}

//do while
//en el do while se ejecutan las instrucciones y luego valida la condicion
do {
    console.log("Do While " + contador);
    contador++;
} while (contador<=10);

//for
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let numeros = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
for(let i = 0; i < numeros.length; i++){
    console.log(`Los valores del arreglo es ${numeros[i]}`);
}

//for in
//me permite recorrer las propiedades de un objeto
const datos = { 
    nombre: "Fabio",
    apellido: "Estevez",
    edad: 25
}
for (const propiedad in datos) {
    console.log(`Key: ${propiedad}, Value: ${datos[propiedad]}`);
}

//for of
//me permite recorrer todos los elementos de cualquier objeto que sea iterable
for (const elemento of numeros) {
    console.log(elemento);
}

let cadena = "Hola mundo";
for (const caracter of cadena) {
    console.log(caracter);
}