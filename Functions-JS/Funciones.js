//FUNCIONES
function saludar(){
    console.log("Hola me llamo fabio");
}
saludar();
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
//FUNCIONES EN VARIABLES
// No se pueden ejecutar antes de inicializarlas.
// saludo(); antes de la const saludo.
const saludo = function(){
    console.log("Hola me llamo fabio");
}
saludo();
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
//FUNCIONES FLECHA ( => )
// No disponen de contexto propio de "this".
// Disponen de retorno implicito, delimitadores opcionales y no se alzan.
// {} son obligatorias cuando hay mas de una instruccion.
const saludar = (nombre) => {
    console.log(`Hola me llamo ${nombre}`);
}
saludar();
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
/* PARAMETROS Y ARGUMENTOS EN FUNCIONES */
// Todas las funciones pueden tener parametros para hacerlas aun mas polivalentes.
// Los parametros son accesibles como variables en el cuerpo de la funcion.
// Al invocar la funcion, pasamos valores como argumentos que son aceptados como parametros.
function saludos(nombre){
    console.log("Hola me llamo " + nombre);
}
saludos("Juan");
// Se pueden establecer valores por defecto para los parametros en el caso de que no se satisfagan en la invocacion.
function saludar1(nombre="Carlos", apellido="Jaimez"){
    console.log(`Hola me llamo ${nombre} ${apellido}`);
}
saludar1(); // En este caso pasara los valores asignados por defecto en las variables.
saludar1("Andres", "Carvajal") // En este caso pasara los valores declarados en la invocacion.
saludar1(undefined, "Charro") // En este caso queremos que tome el primer valor por defecto.
//-----------------------------------------------------------------------------------------------------------------