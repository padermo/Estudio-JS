//una function es un bloque de codigo que se define una vez y se puede reutilizar varias veces, tambien puede recibir parametros

//funcion declarada
function funcionDeclarada(){
    console.log("Uno");
}
funcionDeclarada();

function devuelveValor(){
    console.log("Dos");
    return "La funcion va a retornar una cadena de texto";
}
let valor = devuelveValor();
console.log(valor);

//funcion que acepta parametros
function aceptaParametros(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}
let persona = new aceptaParametros("carlos", 22);
console.log(persona);

//funcion anonima
/*const funcionExpresada = function(){
    console.log("Esto es una funcion expresada");
}*/
const funcionExpresada = () => console.log("Esto es una funcion expresada");
funcionExpresada();