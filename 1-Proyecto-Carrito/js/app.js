//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
let articulosCarrito = [];

carrito.addEventListener();


function cargarEventListeners(){   
    listaCursos.addEventListener('click', agregarCurso);
}


//funciones
function agregarCurso(e){
    e.preventDefault();


    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso){
    console.log(curso);
}

 //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),  
        cantidad: 1 
    } 
