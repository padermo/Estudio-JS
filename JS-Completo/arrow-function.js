/* 
1. si la arrow function solo recibe 1 solo parametro, se puede omitir los ()
2. si la arrow function tiene mas de una linea de codigo se deben colocar los {} despues de la arrow function
*/

const saludar = () => console.log("Hola");
saludar();

//para que la arrow function reciba parametros
const saludo = (nombre) => console.log(`Hola ${nombre}`);
saludo("Carlos");

const numeros = [2,3,4,5,6];
numeros.forEach((elemento, i) => console.log(`El elemento ${elemento} esta en la posision ${i}`));