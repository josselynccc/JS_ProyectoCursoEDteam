export default class usuario{
    constructor(nombre,apellido,edad,correo,activo){
        this.nombre=nombre,
        this.apellido=apellido,
        this.edad=edad,
        this.correo=correo,
        this.activo=activo
    }
    getNombre(){
        return this.nombre
    }
    getApellido(){
        return this.apellido
    }
    saludar(){
        return `hola soy ${this.nombre}`
    }
}