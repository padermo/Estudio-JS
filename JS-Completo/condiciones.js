//if else
let edad = 17;
if(edad>=18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

//if else if else
let hora = parseInt(prompt("Ingresa el valor de la hora"));
if(hora >= 0 && hora <= 5){
    console.log(`Dejame dormir, son las ${hora} am.`);
}else if(hora >= 6 && hora <= 11){
    console.log(`Buenos días, son las ${hora} am.`);
}else if(hora >= 12 && hora <= 18){
    console.log(`Buenas tardes, son las ${hora} pm.`);
}else if(hora >= 19 && hora <= 23){
    console.log(`Buenas noches, son las ${hora} pm.`);
}

//operador ternario (condicion) ? verdadero:falsa
//el operador ternario solo puede ejecutar una linea de codigo
let mayor = (edad>=18) ? "Eres mayor de edad":"Eres menor de edad";
console.log(mayor);

//switch case
let dia = parseInt(prompt("Ingresa un número del dia siendo 0-domingo y 6-sabado"));
switch(dia){
    case 0:
        console.log("Hoy es domingo");
        break;
    case 1:
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es martes");
        break;
    case 3:
        console.log("Hoy es miercoles");
        break;
    case 4:
        console.log("Hoy es jueves");
        break;
    case 5:
        console.log("Hoy es viernes");
        break;
    case 6:
        console.log("Hoy es sabado");
        break;
    default:
        console.log("Ingresa un número del 0 al 6");
        break;
}