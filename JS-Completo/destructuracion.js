const numeros = [1, 2, 3, 4, 5];

//usando destructuracion
const [one, two, three] = numeros;
console.log(one, two, three);


//para que la destructuracion en objetos funcione, el nombre de las variables deben ser iguales al nombre de los elementos del objeto
const persona = {
    nombre: "Fabio",
    apellido: "Estevez",
    edad: 25
}
const {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad);