/* Planteamiento de los ejercicios
1) Programa una funcion que cuente el número de caracteres de una cadena de texto, pe.miFuncion("Hola Mundo") devolvera 10
2) Programa una funcion que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolvera "Hola"
3) Programa una funcion que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion("hola que tal", "")
   devolvera ["hola", "que", "tal"]
4) Programa una funcion que repita un texto X veces, pe. miFuncion("Hola Mundo", 3) devolvera Hola Mundo 3 veces
*/

//1
let hola = "Hola Mundo";
for(let i=0; i<hola.length; i++){
    console.log(hola.length[i]);
}

//2
let palabraRecortada = hola.slice(hola, 4);
console.log(palabraRecortada);

//3
let palabra = "hola que tal";
let nuevaPalabra = [];
nuevaPalabra.push(palabra.split(" "));
console.log(nuevaPalabra);

//4
let texto = "Hola Mundo ";
let repetir = texto.repeat(3);
console.log(repetir);

/* 
5) Programa una funcion que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolvera "odnuM aloH"
6) Programa una funcion para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("Hola Mundo Adios Mundo")
   devolvera 2
7) Programa una funcion que valide si una plabra o frase dad, es un palindromo (que se lee igual en ambos sentidos), pe. miFuncion(salas)
   devolvera true
8) Programa una funcion que elimine cierto patron de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz")
   devolvera "1,2,3,4,5"
*/

//5
/* 
split(): separa cada caracter de una cadena y lo convierte en un nuevo array
reverse(): toma esa matriz e invertira los elementos dentro de ella
join(): junta los los elementos invertidos por el metodo reverse()
*/
let invertida = hola.split("").reverse().join("");
console.log(invertida);

//6


