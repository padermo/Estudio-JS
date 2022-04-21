console.log("Log: un registro de lo que ha pasado en nuestra aplicación");
console.error("Esto es un error");
console.warn("Esto es una alerta");
console.info("Esto es un mensaje informativo");

/* 
COMODINES
%s = strings
%d = digitos
*/
let nombre = "carlos", edad = 24;
console.log(`Hola mi nombre es %s y tengo %d años`, nombre, edad);
console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);

//Limpiar toda la consola
console.clear();
//Ver los elementos de un objeto
console.dir(document);
//Crear grupos
console.group("Lenguajes");
console.log("JavaScript");
console.log("Python");
console.log("Ruby");
console.log("C#");
console.groupEnd();
//Crear tablas
console.log(console);
console.table(Object.entries(console));

const numeros = [1,2,3,4,5], vocales = ["a", "e", "i", "o", "u"];
console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "Boni",
    raza: "Boxer",
    color: "Cafee"
}
console.table(perro);
console.clear();
//Tiempo
console.time("Cuanto tiempo tarda mi código");
const arreglo = Array(1000000);
for(let i=0; i<arreglo.length; i++){
    arreglo[i] = i;
}
console.timeEnd("Cuanto tiempo tarda mi código");
//Cuantas veces se ejecuto el bloque de codigo
for(let i=0; i<=100; i++){
    console.count("Codigo for");
    console.log(i);
}
console.clear();
//Hacer test del codigo con console
let x=1, y=2, pruebaXY="Se espera que X siempre sea menor que Y";
console.assert(x>y, {x,y,pruebaXY});