let arreglo = [10, 12, 5, 19];

//acceder al largo del arreglo
console.log(arreglo.length);
//push(): colocar un elemento al final del arreglo
arreglo.push(20);
console.log(arreglo);
//unshift(): colocar un elemento al inicio del arreglo
arreglo.unshift(3);
console.log(arreglo);
//shift(): quita el primer elemento del arreglo
arreglo.shift();
console.log(arreglo);
//pop(): quitar el ultimo elemento del arreglo
arreglo.pop();
console.log(arreglo);
//sort(): ordena el arreglo alfabeticamente
arreglo.sort();
console.log(arreglo);
//reverse(): voltea el orden del arreglo
arreglo.reverse();
console.log(arreglo);

//iterar arreglos
for(let i=0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}

//ordenar el arreglo numerico con .sort()
function ordenacion(a, b){
    if(a > b){
        return 1;
    }else if(b > a){
        return -1;
    }else if(a == b){
        return 0;
    }
}
arreglo.sort(ordenacion);
console.log(arreglo);

//pasar de cadena de caracteres a un arreglo con .split()
let cadenaArreglo = "a,b,c,2".split(",");
console.log(cadenaArreglo);
//pasar de un arreglo a una cadena de caracteres con .join()
cadenaArreglo = cadenaArreglo.join(".");
console.log(cadenaArreglo);