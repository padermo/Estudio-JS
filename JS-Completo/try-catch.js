//la estructura try - catch nos ayuda a manejar los errores
try {
    console.log("En el try se agrega el codigo a evaluar");
} catch (error) {
    console.log("catch captura cualquier error lanzado en el try");
} finally {
    console.log("finally se ejecutara siempre al final de un bloque try catch");
}

//como crear nuestros errores
try {
    let numero = 10;
    if(isNaN(numero)){
        throw new Error("El valor introducido no es un número"); //throw new Error: nos permite crear un caso de error
    }
    console.log(numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}