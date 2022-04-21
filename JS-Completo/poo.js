/* 
POO
    Clases - modelo a seguir
    Objetos - es una instancia de una clase
        Atributos - es una caracteristica o propiedad del objeto (son variables dentro de un objeto)
        Métodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/


//Funcion Constructora donde asignamos los metodos al prototipo, no a la funcion como tal
// function Animal(nombre, genero){
//     //Atributos
//     this.nombre = nombre;
//     this.genero = genero;
// }

// //Metodo agregados al prototipo de la funcion constructora
// Animal.prototype.sonar = function(){
//     console.log("Hago sonidos porque estoy vivo");
// }

// //Herencia
// function Perro(nombre, genero, tamanio){
//     this.super = Animal;
//     this.super(nombre, genero);
//     this.tamanio = tamanio;
// }
// //Perro esta heredando de Animal
// Perro.prototype = new Animal();
// Perro.prototype.constructor = Perro;

// //Sobreescritura de metodos del prototipo padre en el hijo
// Perro.prototype.sonar = function(){
//     console.log("Soy un perro y mi sonido es un ladrido");
// }

// Perro.prototype.ladrar = function(){
//     console.log("Guauuu Guauuu!!!");
// }

// //creacion
// const snoopy = new Perro("snoopy", "macho", "mediano");
// const lola = new Animal("lola bunny", "hembra");

// //llamados
// console.log(snoopy);
// console.log(lola);

// snoopy.sonar();


//Clases
class Animal{
    //constructor con atributos
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    //metodo
    sonido(){
        console.log("Hago sonido");
    }
}

//herencia
class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        //super() manda a llamar el constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }
    static queEres(){
        console.log("Los perros somos animales mamiferos que pertenecemos a la familia de los caninos");
    }

    //Obtener informacion
    get getRaza(){
        return this.raza;
    }

    //Modificar informacion
    set setRaza(raza){
        this.raza = raza;
    }
}

Perro.queEres();

//creacion
const mimi = new Perro("Mimi", "Hembra", "Gigante");
const scooby = new Animal("SScooby", "Macho");

//llamado
console.log(mimi);
console.log(scooby);
//llamando los metodos get y set
console.log(scooby.getRaza);
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);
