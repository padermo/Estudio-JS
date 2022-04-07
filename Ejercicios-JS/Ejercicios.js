/*==================================================================================
Ejercicio 1.

De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detras de B, 
y D ha llegado en medio de A y C. Debemos calcular el orden de llegada.

B -> 1
C -> 2
D -> 3
A -> 4
==================================================================================*/
// let corredores = {
//     A: 0,
//     B: 0,
//     C: 0,
//     D: 0,

//     resultado: function(){
//         if(corredores.C > corredores.B && corredores.D > corredores.B && corredores.D > corredores.C && corredores.D < corredores.A){
//             return true;
//         }else{
//             return false;
//         }
//     },
//     intervalo: setInterval(function(){
//         corredores.A = Math.ceil(Math.random()*4);
//         corredores.B = Math.ceil(Math.random()*4);
//         corredores.C = Math.ceil(Math.random()*4);
//         corredores.D = Math.ceil(Math.random()*4);
        
//         if(corredores.resultado()){
//             clearInterval(corredores.intervalo);
//             console.log("atleta A ", corredores.A );
//             console.log("atleta B ", corredores.B );
//             console.log("atleta C ", corredores.C );
//             console.log("atleta D ", corredores.D );
//         }
//     },10)
// }

/*==================================================================================
Ejercicio 2.

Hacer un programa que pida dos números y que nos diga cual es el mayor, el menor y si son iguales.
==================================================================================*/

let num1 = prompt("Escribe el primer número: ");
let num2 = prompt("Escribe el segundo número: ");

if(num1>num2){
    console.log("El número mayor es: " + num1 + " y El número menor es: " + num2);
}else if(num1<num2){
    console.log("El número menor es: " + num1 + " y El número mayor es: " + num2);
}else if(num1===num2){
    console.log("Los dos números son iguales");
}


/*==================================================================================
Ejercicio 3.

Al programa anterior, si los numeros no son un número o son menores o iguales a cero, nos los vuelva a pedir
==================================================================================*/

