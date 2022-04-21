let nombre = "Fabio";
let cadena = "Hola " + nombre;

console.log(cadena);
//obtener la longitud
console.log(cadena.length);
//para saber si un texto esta contenido en otro texto
let resultado = cadena.indexOf("codigoFacilito");
console.log(resultado);
//accedemos al indice
console.log(nombre[2]);
console.log(nombre.charAt(2));
//la ultima posicion es el largo de la cadena -1
console.log(nombre[nombre.length-1])
//para reemplazar un caracter por otro
nombre =nombre.replace("o", "s");
console.log(nombre);
//obtener pedazos de las cadenas, slice toma dos parametros: (inicio, final)
console.log(nombre.slice(1, 3));
//pasar todo a mayuscula
console.log(nombre.toUpperCase());
//pasar todo a minuscula
console.log(nombre.toLocaleLowerCase());