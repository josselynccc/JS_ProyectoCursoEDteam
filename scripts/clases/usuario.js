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
    getEdad(){
        return this.edad
    }
    getCorreo(){
        return this.correo
    }
    getActivo(){
        return this.activo
    }
    setNombre(nombre){
        this.nombre=nombre
    }
    setApellido(apellido){
        this.apellido=apellido
    }
    setEdad(edad){
        this.edad=edad
    }
    setCorreo(correo){
        this.correo=correo
    }
    setActivo(activo){
        this.activo=activo
    }
}