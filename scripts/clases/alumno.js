import usuario from "./usuario.js";
export default class alumno extends usuario{
    constructor(nombre,apellido,edad,correo,activo,cursoTomado){
        super(nombre,apellido,edad,correo,activo)
        this.cursoTomado = cursoTomado
    }
    getCursotomado(){
        return this.cursoTomado
    }
    setCursotomado(cursotomado){
        this.cursoTomado=cursotomado
    }
}