//se recomienda usar const para definir un objeto

const datos = {
    nombre: "Fabio",
    apellido: "Estevez",
    edad: 25,
    hobbies: ["Gym", "Gaming", "Runner"],
    soltero: false,
    contacto:{
        email: "fabio@gmail.com",
        tel: 3103456789
    },
    saludar: function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mis pasatiempos son: ${this.hobbies}. Mi número de telefono es ${this.contacto.tel}`);
    }
}

console.log(datos);
console.log(datos.hobbies[2]);
console.log(datos.contacto.email);
console.log(`${datos.nombre} ${datos.apellido}`);
datos.saludar();
console.log(datos.hasOwnProperty("nombre")); //hasOwnProperty nos dice si el nombre existe en el objeto y nos retorna un valor booleano