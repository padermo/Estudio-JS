let a = [];
let b = [1, 3, 4, 5, 1, 6, ["A", "B", "C", "D"]];

console.log(a);
console.log(b);
console.log(b.length); //obtenemos la cantidad de elementos que tiene el arreglo
console.log(b[2]); //obtenemos el elemento en la posision 2 del arreglo
console.log(b[6][2]); //obtenemos el elemento de la posision 2 dentro del arreglo que esta en la posision 6 del arreglo principal

//otra forma de crear arreglos
let c = Array.of("B", "E", "N", "S");
console.log(c);

let d = Array(100).fill(false); //fill nos permite llenar un arreglo con un valor
console.log(d);

let colores = ["Blanco", "Negro", "Azul", "Cafe"];

colores.push("Rosa"); //agrega un nuevo elemento al arreglo en la ultima posision
colores.pop(); //quita el elemento en la ultima posision del arreglo


//forEach nos permite recorrer un arreglo el cual se declara como funcion y recibe 2 parametros (elemento, index)
/*colores.forEach(function(elemento, index){
    console.log(`<li id="${index}">${elemento}</li>`);
});*/
colores.forEach((elemento, index) => console.log(`<li id="${index}">${elemento}</li>`)); //index accede a la posision del elemento