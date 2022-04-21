
//num max
let maximo = 100;
//num min
let minimo = 1;

//num random
let numSecret = Math.random() * (maximo-minimo)+minimo;
//parseInt nos convierte a numero entero
numSecret = parseInt(numSecret);

console.log(numSecret);

let mensaje = "Ingresa un número para adivinar el número mágico";
while(true){
    let numUser = prompt(mensaje, "0");
    numUser = parseInt(numUser);
    if(numUser === numSecret){
        alert("Adivinaste el número secreto");
        break;
    }else if(numUser === 0){
        break;
    }else if(numUser > numSecret){
        alert("El número que ingresaste es mayor al número magico");
    }else if(numUser < numSecret){
        alert("El número que ingresaste es menor al número magico");
    }
}