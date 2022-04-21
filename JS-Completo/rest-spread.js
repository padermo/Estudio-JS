//(...)rest = es una forma de agregar parametros infinitos a una funcion o una variable; Se pasa como parametro de una funcion
function sumar(a, b, ...c){
    let resultado = a+b;

    c.forEach((elemento) => {
        resultado+=elemento
    });

    return resultado;
}

console.log(sumar(1,3,5,6,2));

//(...)spread = se puede ejecutar en cualquier sentencia del codigo
const arr1 = [1,2,3,4,5,6], arr2=[7,8,9,10];
//creamos un tercer arreglo con los elementos de los arreglos arr1 y arr2
const arr3 = [...arr1, ...arr2];
console.log(arr3);