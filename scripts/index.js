import curso from "./clases/curso.js"
import profesor from './clases/profesor.js';
import alumno from './clases/alumno.js';


//obtener un elemento del DOM
const elem = document.getElementById("cursos")
const elemA = document.getElementById("alumnos")
const elemP = document.getElementById("profesores")
/**
 * Se va a utilizar una funcion porque para crear varios
 * cursos se necesita repetir la sentencia
 * 
 * <img src="${htmlBasico.getPoster()}" />
        <h3>${htmlBasico.getNombre()}</h3>
        <span>Cantidad de clases: ${htmlBasico.getClases()}</span>
 */

/**
 * primero crearemos un hijo DIV para que ingrese al padre DIV CURSOS
 */

function mostrarCurso(curso) {
    const hijo= document.createElement("div")
    // colocar una clase a mi div
    hijo.classList.add("card")
    //innerHTML nos permite insertar contenido en el DOM
    hijo.innerHTML = `
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="${curso.getPoster()}" alt=""${curso.getNombre()}/>
        </div>

        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
            <div class="s-center">
                <span class="small">Cantidad de clases: ${curso.getClases()}</span>
            </div>
        </div>
    `
    elem.appendChild(hijo)
}

const form = document.getElementById("formCursos")
// esperar el evento submit
// e ejecuta el evento submit
// => ejecuta una función
form.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    console.log(target.nombreCurso.value)
    console.log(target.posterCurso.value)
    console.log(target.clasesCurso.value)

    const curso_nuevo = new curso(target.nombreCurso.value,target.posterCurso.value,target.clasesCurso.value)
    mostrarCurso(curso_nuevo)
})


function mostrarProfesor(profesor) {
    const hijoP= document.createElement("tr")
    hijoP.innerHTML = `
            <td>"${profesor.getNombre()}"</td>
            <td>"${profesor.getApellido()}"</td>
            <td>"${profesor.getEdad()}"</td>
            <td>"${profesor.getCorreo()}"</td>
            <td>"${profesor.getActivo()}"</td>
            <td>"${profesor.getCursodictado()}"</td>
    `
    elemP.appendChild(hijoP)
}

const formP = document.getElementById("formProfesor")
formP.addEventListener("submit", eP => {
    eP.preventDefault()
    const targetP = eP.target
    
    const profe_nuevo = new profesor(targetP.nombreProfesor.value,targetP.apellidoProfesor.value,targetP.edadProfesor.value,targetP.correoProfesor.value,targetP.activoProfesor.value,targetP.cdProfesor.value)
    mostrarProfesor(profe_nuevo)
})



function mostrarAlumno(alumno) {
    const hijoA= document.createElement("tr")
    hijoA.innerHTML = `
            <td>"${alumno.getNombre()}"</td>
            <td>"${alumno.getApellido()}"</td>
            <td>"${alumno.getEdad()}"</td>
            <td>"${alumno.getCorreo()}"</td>
            <td>"${alumno.getActivo()}"</td>
            <td>"${alumno.getCursotomado()}"</td>
    `
    elemA.appendChild(hijoA)
}

const formA = document.getElementById("formAlumnos")
formA.addEventListener("submit", eA => {
    eA.preventDefault()
    const targetA = eA.target
    
    const alum_nuevo = new alumno(targetA.nombreAlumno.value,targetA.apellidoAlumno.value,targetA.edadAlumno.value,targetA.correoAlumno.value,targetA.activoAlumno.value,targetA.ctAlumno.value)
    mostrarAlumno(alum_nuevo)
})








/**
 * const profe1 = new profesor("ana","colli",34,"colli@gmil.com",true,["html","css"])
 * const alum1 = new alumno("juanito", "perez", 21,"pepe@gmail.com",true,["html"])
 * const alum2 = new alumno("maria", "perez", 21,"pepe@gmail.com",true,["html"])

const html= new curso ("html","miposter",7)

html.setInscritos([...html.getInscritos(),alum1])
console.log(html)

html.setInscritos(...[html.getInscritos(),alum2])
console.log(html)*/

function mostrarFormulario(idForm) {
    switch (idForm) {
        case 'Alumno':
            formP.style.display = 'none'
            form.style.display = 'none'
            formA.style.display = 'block'
            elem.style.display = 'none'
            elemA.style.display = 'block'
            elemP.style.display = 'none'
            break;
        case 'Profesor':
            formP.style.display = 'block'
            form.style.display = 'none'
            formA.style.display = 'none'
            elem.style.display = 'none'
            elemA.style.display = 'none'
            elemP.style.display = 'block'
            break;
        case 'Curso':
            formP.style.display = 'none'
            form.style.display = 'block'
            formA.style.display = 'none'
            elem.style.display = 'block'
            elemA.style.display = 'none'
            elemP.style.display = 'none'
            break;
        default:
            "seleccionar una opcion"
            break;
    }
}

const botonA=document.getElementById("botonA")
botonA.addEventListener("click", function() {
    mostrarFormulario("Alumno")
})

const botonP=document.getElementById("botonP")
botonP.addEventListener("click", function() {
    mostrarFormulario("Profesor")
})

const botonC=document.getElementById("botonC")
botonC.addEventListener("click", function() {
    mostrarFormulario("Curso")
})
