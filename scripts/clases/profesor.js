import usuario from "./usuario.js";
export default class profesor extends usuario{
    constructor(nombre,apellido,edad,correo,activo,cursoDictado){
        super(nombre,apellido,edad,correo,activo)
        this.cursoDictado = cursoDictado
    }
}