/* ESTA ES UN METODO DE COMO CREAR OBJETOS EN BASE A UN MOLDE
* ANTES SE LLAMABAN FUNCIONES CONSTRUCTORAS, AHORA SE LLAMAN CLASES

//La funcion constructora sirve para construir objetos
function Usuario(nombres, apellidos, correo, activo){
    this.nombres = nombres,
    this.apellidos = apellidos,
    this.correo = correo,
    this.activo = activo
}

//Creando el objeto con la palabra reservada  new
const beto = new Usuario("beto","quiroga","correo", true)

console.log(beto);

*/

// CLASES

class Usuario {
    //metodo constructor
    constructor(nombres, apellidos, correo, activo){
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.correo = correo,
        this.activo = activo
    }

    presentarse(){
        return `hola, soy ${this.nombres}`
    }

    //metodos getters y setters
    //get -> obtener
    //set -> dar

    getNombres(){
        return this.nombres
    }
    getApellidos(){
        return this.apellidos
    }

    // DAR NUEVA INFORMACION AL OBJETO
    setNombres(NuevoNombre){
        this.nombres = NuevoNombre
    }
}

// instanciar un objeto // beto es instancia de la clase usuario
const beto = new Usuario("beto","quiroga","correo", true)

console.log(beto);
console.log(beto.presentarse());


// el metodo get servira para no acceder directamente a los atributos porque son privados
// con get lo convierto en publico
console.log(beto.getNombres()); // buena practica
console.log(beto.nombres);  // mala practica

// primero cambio el nombre
beto.setNombres("luis migues despacito")

// segundo llamo el nombre
console.log(beto.getNombres());