//OBJETOS LITERALES
const PeliculaUno = {
    nombre: 'Harry',
    id: 01,
    reproducir(){
        return `Reproduciendo pelicula... ${this.nombre}`;
    }
}

//POO
class Pelicula{
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }
    reproducir(){
        return `Reproduciendo pelicula... ${this.nombre}`;
    }
}

//Herencia
class Serie extends Pelicula{
    constructor(nombre, id, cap){
        super(nombre, id);
        this.capitulo = cap;
    }
    reproducirCapitulo(){
        return `Reproduciendo capitulo ${this.cap} de ${this.nombre} `;
    }
}

//Creacion de objetos
const pelicula1 = new Pelicula("Harry Potter", 01);
const pelicula2 = new Pelicula("300", 02);
const serie1 = new Serie("Arrow", 03, 1);

//Imprimir en consola
console.log(pelicula1, reproducir());
console.log(pelicula2, reproducir());
console.log(serie1.reproducirCapitulo());