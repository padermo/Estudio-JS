//ARRAY
let numeros = [2, 3, 4, 5, 6];
let numeros2 = [10, 11, 12, 13, 14];

//OBJETOS
const beers = [{
    name: "Heyneken",
    price: 3.50,
    alcohol: 4.5
},{
    name: "Stella Artois",
    price: 3.50,
    alcohol: 5.0
},{
    name: "Corona",
    price: 2.50,
    alcohol: 4.5
}
];


//-----------------------------------------------------------------------------------------------------------------
/*---- PROPIEDAD LENGTH ----*/
// length = podemos acceder a la longitud del array.
console.log(numeros.length);
// length-1 = podemos acceder a la longitud del array pero nos va a traer el ultimo elemento.
console.log(numeros.length-1);
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*---- PROPIEDAD .AT ----*/
// .at() = nos permite acceder a la posision indicada de un elemento especifico.
console.log(numeros.at(2)); //esto nos devolveria el elemento en la posision 2 del array = 4.
/* .at(-) = nos permite acceder a la posision indicada de un elemento especifico pero 
al ser negativo empieza desde el ultimo elemento hasta el primero. */
console.log(numeros.at(-2)); // esto nos devolveria el elemento en la posision -2 del array = 5.
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*---- BUCLE FOR ----*/
// for(){} = nos permite recorrer todos los elementos de un array.
for(let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
}
// for(){} = para recorrer un array desde el ultimo elemento hasta el primero.
for(let i=numeros.length-1; i>=0; i--){
    console.log(numeros[i]);
}

/*---- BUCLE FOR OF ----*/
for(let i of numeros){
    console.log(i);
}
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*----- ELEMENTOS MUTABLES EN JS -----*/
// los elementos mutables modifican los valores de nuestro array

/*---- PROPIEDAD .PUSH() ----*/
// .push() = nos agrega un nuevo elemento al final del arreglo.
numeros.push(10); 


/*---- PROPIEDAD .UNSHIFT() ----*/
// .unshift() = nos agrega un nuevo elemento al inicio del arreglo.
numeros.unshift(15);


/*---- PROPIEDAD .SPLICE() ----*/
// .splice() = nos agrega un nuevo elemento en la posision que le pasemos en parametros.
// los parametros que recibe .splice() son: (indice elemento, eliminar elemento, elemento a agregar).
numeros.splice(2, 0, 20); // le estamos diciendo que en la posision 2 agrege el elemento 20 y que borre 0 elementos.


/*---- PROPIEDAD .POP() ----*/
// .pop() = elimina el elemento y regresa el ultimo elemento.
let b = numeros.pop(); // eliminamos el ultimo elemento que seria = 10 y lo gurda en la variable b.
console.log(b); // la variable b = 10.


/*---- PROPIEDAD .SHIFT() ----*/
// .shift() = elimina el elemento y regresa el primer elemento.
let b2 = numeros.shift(); // eliminamos el primer elemento que seria = 15 y lo guarda en la variable b2.
console.log(b2); // la variable b2 = 15.


/*---- PROPIEDAD .FILL() ----*/
// .fill() = nos llena todos los elementos existentes con un unico elemento.
// recibe 3 parametros (nuevo elemento, indice inicial, indice maximo).
numeros2.fill('pato', 0, numeros2.length);


/*---- PROPIEDAD .SORT() ----*/
// .sort() = ordena nuestro arreglo.
numeros.sort();
// .sort((a, b)) = nos permite ordenar objetos pero no strings.
beers.sort((a, b) => a.price - b.alcohol);
// en caso de querer ordenar por strings usamos lo siguiente:
beers.sort((a, b) => {
    if(a.name > b.name){ // cuanddo el nombre de a es mayor al nombre b, devulve 1
        return 1;
    }
    if(a.name < b.name){ // cuanddo el nombre de a es menor al nombre b, devulve -1
        return -1;
    }
    return 0; // cuanddo el nombre de a es igual al nombre b, devulve 0
});

/*---- PROPIEDAD .REVERSE() ----*/
// .reverse() = sirve para revertir el orden de los elementos de un arreglo.
beers.reverse();
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*----- ELEMENTOS INMUTABLES EN JS -----*/
// los elementos inmutables o no mutables, no modifican los valores de nuestro array.

/*---- PROPIEDAD .CONCAT() ----*/
// .concat() = nos concatena 2 arrays.
const unionNumeros = numeros.concat(numeros2);


/*---- PROPIEDAD .SLICE() ----*/
// .slice() = nos va a crear un nuevo arreglo a partir de uno dado.
// recibe 2 parametros (indice inicial, indice de corte).
// tambien puede recibir valores negativos.
const nuevoNumero = numeros.slice(0, 3); // esto nos va a crear un nuevo arreglo con los datos [2, 3, 4].


/*---- PROPIEDAD .MAP() ----*/
// .map() = modifica los valores de un objeto o arreglo.
// ejemplo: multiplicar por 2 el elemento precio del objeto beers
let beer3 = beers.map(element => {
    return{
        name: element.name,
        price: element.price * 2,
        alcohol: element.alcohol
    };
});
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*---- PROPIEDAD .INDEXOF() ----*/
// .indexOf() = nos regresa la posision en la que se encuentra el elemento de modo estricta.
// en caso de regresar una posision positiva idica que el elemento existe en el arreglo.
// en caso de regresar una posision negativa indica que el elemento no existe en el arreglo.
console.log(numeros.indexOf(5)); // esto nos devolvera la posision del elemento 5 = 3.
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*---- OPERADOR SPREAD (...) ----*/
// ejemplo 1: sumar elementos del arreglo numeros.
function sum(a,b,c,d){
    return a+b+c+d;
}
console.log(sum(...numeros)); // suma la cantidad de elementos indicados en el arreglo dado.

// ejemplo 2: concatenar todos los elementos de los 2 arrays [numeros] + [numeros2].
const numbers = [...numeros, ...numeros2]; // esto nos va a devolver un nuevo arreglo con los elementos concatenados de los 2 arrays indicados.

// ejemplo 3: hacer una copia del arreglo [numeros].
const nuevoNumber = [...numeros]; // esto nos va a crear una copia de todos los elementos de [numeros] en [nuevoNumber].
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*---- FUNCION DE PRIMER ORDEN ----*/
// funcion que se manda.
let fn = function(){
    console.log("Hello");
}
fn();

/*---- FUNCION DE ORDEN SUPERIOR ----*/
// funcion que recibe funciones.
function some(f){
    console.log("algo antes");
    f();
    console.log("algo despues");
}
some(fn);

/*---- FUNCION FLECHA ~ ARROWFUNCTION ----*/
// en caso de que la funcion contenga mas instrucciones, es necesario usar {} despues de la arrowfunction =>.
// en caso de que la funcion contenga mas de un parametro, es necesario usar () para indicar los otros parametros.
let fn2 = (name) => console.log("Hello" + name);
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*---- FOREACH ----*/
// recorre nuestro objeto beers
beers.forEach((element, i) => {
    console.log(element);
    console.log("Index: " + i);
});
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*---- PROPIEDAD FIND ----*/
// .find() = nos devuelve el elemento indicado.
const beer = beers.find(element => element.name === 'Corona');
console.log(beer);
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*---- PROPIEDAD FILTER ----*/
// .filter() = nos devuelve todos los elementos segun el parametro indicado.
const beer2 = beers.filter(element => element.alcohol < 8);
console.log(beer2);
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*---- BOOLEANS AND EVERY AND SOME ----*/
// nos sirve para decir si una condicion es verdadera o falsa.

// si el elemento.price es mayor a 0 va a regresar TRUE de lo contrario regresara FALSE.
let fN = (e) => e.price > 0;
// .every() = nos sirve para saber si todos los elementos del array cumplen con la funcion.
console.log(beer.every(fN));
// .some() = nos sirve para saber si alguno de todos los elementos del array cumplen con la funcion.
console.log(beer.some(fN));
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*---- PROPIEDAD .REDUCE() ----*/
// .reduce() = reduce y regresa un solo valor.
// recorre toda la coleccion y hace algo que se guarda en una variable.
// acc = acumulado -- curr = recorrido
const suma1 = beers.reduce((acc, curr)=> acc + curr.price, 0);
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/*---- ARRAY DE FUNCIONES ----*/
const fns = [
    ()=>console.log('soy el primero'),
    ()=>console.log('soy el segundo'),
    ()=>console.log('soy el tercero'),
    ()=>console.log('soy el cuarto')
];
fns.forEach(element => element());
//-----------------------------------------------------------------------------------------------------------------