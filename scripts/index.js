import curso from "./clases/curso.js"
import profesor from './clases/profesor.js';
import alumno from './clases/alumno.js';

//obtener un elemento del DOM
const elem = document.getElementById("cursos")

/**
 * innerHTML nos permite insertar contenido en el DOM 
    elem.innerHTML = `
        <img src="${htmlBasico.getPoster()}" />
        <h3>${htmlBasico.getNombre()}</h3>
        <span>Cantidad de clases: ${htmlBasico.getClases()}</span>
`*/
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

const profe1 = new profesor("ana","colli",34,"colli@gmil.com",true,["html","css"])

const alum1 = new alumno("juanito", "perez", 21,"pepe@gmail.com",true,["html"])
const alum2 = new alumno("maria", "perez", 21,"pepe@gmail.com",true,["html"])

const html= new curso ("html","miposter",7)

html.setInscritos([...html.getInscritos(),alum1])
console.log(html)

html.setInscritos(...[html.getInscritos(),alum2])
console.log(html)