let curso = {
    titulo: "Curso de javascript",
    videos: 19,
    tutorNombre: "uriel",
    get tutor(){
        return this.tutorNombre;
    },
    set tutor(tutor){
        this.tutorNombre = tutor;
    }
};

//set modifica
curso.tutor = "Carlos";
//get agrega
console.log(curso.tutor);