/*si el nombre de la propiedad del objeto es igual al nombre del objeto que se va a crear, 
se puede simplificar colocando solamente el nombre de la variable.*/

/*si se crea un metodo dentro de un objeto, se puede omitir :function y solo dejar el nombre
del metodo con los ()*/

let nombre="Juan", edad=20;

const persona={
    nombre,
    edad,
    decir(){
        console.log("Hola")
    }
}

console.log(persona);