function Tutor(nombre){
    this.nombre = nombre;
    this.saludar = function(){
        console.log("Hola a todos soy " + this.nombre);
    }
}

//creamos un nuevo objeto 
let uriel = new Tutor("Uriel");

uriel.saludar();