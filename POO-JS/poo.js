//------------------------------------------------------------------------------------------------------
/*  NOTAS

1. OBJETOS = Son las pieza central de la POO.los objetos se componen de datos (propiedades) y metodos (funciones)
             que operan sobre esos datos.

2. PROPIEDAD = Es un dato que representa una caracteristica de un objeto. Una propiedad es una variable.
               Un objeto puede tener muchas propiedades.
               
3. METODO = Es una funcion que puede ejecutar nuestro objeto. Un objeto puede tener muchos metodos.

4. CLASE = Funcionan son las plantillas y son utilizadas para instanciar (crear) objetos. Una clase encapsula
           (contiene) todas las propiedades y metodos que despues almacenaran los objetos instanciados.
           Una clase representa a un tipo de objeto; ejemplo: Libro, Automovil, Perro.

5. CONSTRUCTOR = Es un metodo que se llama en el momento de la creacion de instancias (objetos). Los constructores
                 son utiles para "construir" o inicializar  las propiedades de los objetos.
                 
6. GETTER = Un getter es un metodo que permite acceder a una propiedad privada de un objeto
            en lugar de usar la propiedad directamente.
            
7. SETTER = Un setter es un metodo que permite acceder y modificar una propiedad privada de un objeto
            en lugar de modificar la propiedad directamente.     

            
PILARES DE LA POO: {
    Abstraccion = Es eliminar los detalles innecesarios para lo que nosotros queremos o requerimos.
    Encapsulamiento = Es ocultar los detalles que no son relevantes para el exterior.
    Herencia = Por medio de la herencia una clase "hija" hereda los metodos y atributos de una clase "padre".
    Polimorfismo = Capacidad de realizar una misma accion en diferentes formas.
}

EJERCICIO: crear una tienda de libros usando las POO
Book{
    titulo
    autor
    precio
}
comic{
    titulo
    autor
    precio
    ilustradores
}
carrito de compras
*/
//------------------------------------------------------------------------------------------------------

const _private = new WeakMap();

class Book{
    constructor(title, author, price){
        
        const properties ={
            _title: title,
            _author: author,
            _price: price
        }

        // set = permite colocar propiedades
        _private.set(this, {properties});
    }


    //Obtiene el title de un libro
    get title(){
        return _private.get(this).properties['_title'];
    }

    //Modifica el title de un libro
    set title(newTitle){
        return _private.get(this).properties['_title'] = newTitle;
    }

    //Obtiene el author de un libro
    get author(){
        return _private.get(this).properties['_author'];
    }

    //Modifica el title de un libro
    set author(newAuthor){
        return _private.get(this).properties['_author'] = newAuthor;
    }

    //Obtiene el price de un libro
    get price(){
        return _private.get(this).properties['_price'];
    }

    //Modifica el price de un libro
    set price(newPrice){
        return _private.get(this).properties['_price'] = newPrice;
    }

    //Obtener todos los datos
    getAllData(){
        console.log(`Titulo: ${this.title}, Author: ${this.author}, Price: ${this.price}`);
    }
}

class Comic extends Book{
    constructor(name, author, price, ilustrators){
        super(name, author, price);
        this.ilustrators = ilustrators;
    }

    addIlustrator(newIlustrator = []){
        this.ilustrators.push(newIlustrator);
    }

    getAllData(){
        super.getAllData();
        console.log(`Ilustrators: ${this.ilustrators}`);
    }
}

class ShoppingCart{
    constructor(){
        this.products = [];
    }

    //Agregar productos
    addProduct(amount, price){
        this.products.push(...Array(amount).fill(price));
    }

    //Mostrar lista de productos
    showProducts(){
        console.log(this.products);
    }

    //Calcular el total
    calcTotal(){
        return this.products
            .map(price => price)
            .reduce((ac,price) => ac + price, 0);
    }

    //Mostrar el total a pagar
    printTicket(){
        console.log(`Total a pagar ${this.calcTotal()}`);
    }
}

// Instancia de Book
const book1 = new Book();