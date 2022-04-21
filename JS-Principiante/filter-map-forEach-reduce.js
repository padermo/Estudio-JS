//FILTER: recibe como parametro una funcion con 2 parametros opcionales (elemento, indice)
let arreglo = [10, 2, 4, 5, 7, 12, 15, 21, 3];

//hacer un nuevo arreglo con los números pares (SIN FILTER)
let pares = [];
for(let i=0; i<arreglo.length; i++){
    if(arreglo[i]%2==0){
        pares.push(arreglo[i]);
    }
}
console.log(pares);

//hacer un nuevo arreglo con los números pares (CON FILTER)
let pares1 = arreglo.filter(function(elemento){
    return elemento % 2 === 0;
});
console.log(pares1);


//MAP: repites un metodo que se ejecuta sobre los arreglos, se le pasa una funcion y retorna un nuevo arreglo

//nos piden que cada elemento del arreglo le saquemos el cuadrado (SIN MAP)
let cuadrados = [];
for(let i=0; i<arreglo.length; i++){
    cuadrados.push(Math.pow(arreglo[i], 2));
}
console.log(cuadrados);

//nos piden que cada elemento del arreglo le saquemos el cuadrado (CON MAP)
let cuadrados1 = arreglo.map(function(elemento){
    return elemento * elemento;
});
console.log(cuadrados1);


//FOR EACH: itera elementos de un arreglo y recibe una funcion con 3 parametros (elemento, index, arreglo)
arreglo.forEach(function(elemento, index, arreglo){
    arreglo[index] = Math.pow(elemento,2);
});
console.log(arreglo);


//REDUCE: recibe los siguientes parametros: (valor anterior retornado, valor actual, index, arreglo)
let letras = ["h", "o", "l", "a"];

//unir todos los elementos del arreglo letros[]
let palabra = letras.reduce(function(valor_anterior, valor_actual, index, arreglo){
    return valor_anterior+valor_actual;
});
console.log(palabra);

//sumar todos los elementos del arreglo[]
let suma = arreglo.reduce(function(valor_anterior, valor_actual){
    return valor_anterior+valor_actual;
},0);
console.log(suma);