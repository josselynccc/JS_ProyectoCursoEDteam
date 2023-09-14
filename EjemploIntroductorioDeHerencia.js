class usuario{
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

class alumno extends usuario{
    constructor(nombre,apellido,edad,correo,activo,cursoTomado){
        super(nombre,apellido,edad,correo,activo)
        this.cursoTomado = cursoTomado
    }
}

class docente extends usuario{
    constructor(nombre,apellido,edad,correo,activo,cursoDictado){
        super(nombre,apellido,edad,correo,activo)
        this.cursoDictado = cursoDictado
    }
}

const carlo = new alumno("carlo franco","magno",50,"carlo@gmail.com",true,["html","java"])

console.log(carlo.saludar())

console.log(carlo.getNombre())
