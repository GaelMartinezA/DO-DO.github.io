// TENDENCIAS
window.onload = function() {
    const banda = document.getElementById('Cinta');

    if (banda) {
        banda.innerHTML += banda.innerHTML;

        banda.addEventListener('mouseenter', () => {
            banda.style.animationPlayState = 'paused';
        });

        banda.addEventListener('mouseleave', () => {
            banda.style.animationPlayState = 'running';
        });
    }
};

// REGISTRO
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('modalRegistro');
    const datosGuardados = localStorage.getItem('usuarioRegistrado');

    if (!datosGuardados) {
        if(modal) modal.style.display = 'flex';
    } else {
        if(modal) modal.style.display = 'none';
        cargarDatosEnLibreta();
    }
});

function guardarRegistroInicial() {
    const nombre = document.getElementById('reg-nombre').value;
    const correo = document.getElementById('reg-correo').value;

    if (nombre && correo) {
        const usuario = { nombre: nombre, correo: correo };
        localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));
        location.reload();
    } else {
        alert("Por favor llena los campos");
    }
}

function cargarDatosEnLibreta() {
    const datos = JSON.parse(localStorage.getItem('usuarioRegistrado'));
    const displayNombre = document.getElementById('perfil-nombre');
    const displayCorreo = document.getElementById('perfil-correo');
    
    if(displayNombre) displayNombre.innerText = datos.nombre;
    if(displayCorreo) displayCorreo.innerText = datos.correo;
}

document.addEventListener("DOMContentLoaded", () => {

    const nombreGuardado = localStorage.getItem("dodo_nombre");
    
    if (!nombreGuardado) {

        document.getElementById("modalRegistro").style.display = "flex";
    } else {

        cargarDatosInterfaz();
    }
});

function guardarRegistroInicial() {
    const nombre = document.getElementById("reg-nombre").value;
    const correo = document.getElementById("reg-correo").value;

    if (nombre && correo) {
        localStorage.setItem("dodo_nombre", nombre);
        localStorage.setItem("dodo_correo", correo);
        
        document.getElementById("modalRegistro").style.display = "none";
        cargarDatosInterfaz();
    } else {
        alert("Por favor completa los campos técnicos.");
    }
}

function cargarDatosInterfaz() {
    const nombre = localStorage.getItem("dodo_nombre");
    const area = localStorage.getItem("dodo_area") || "Diseño Integral";

    document.getElementById("DisplayNombre").innerText = nombre.toUpperCase();
    document.getElementById("DisplayArea").innerText = area.toUpperCase();
}

function actualizarBitacora(event) {
    event.preventDefault();
    const nuevoNombre = event.target.querySelector('input[type="text"]').value;
    localStorage.setItem("dodo_nombre", nuevoNombre);
    cargarDatosInterfaz();
    alert("BITÁCORA ACTUALIZADA");
}

// ACADEMIA

function irALeccion(idLeccion) {
    console.log("Accediendo al producto: " + idLeccion);
    
    const tarjeta = event.currentTarget;
    
    tarjeta.style.transform = "scale(0.95) rotate(0deg)";
    
    setTimeout(() => {
        window.location.href = idLeccion + ".html";
    }, 150);
}

const descripciones = {
    'teoria': {
        titulo: 'TEORÍA',
        texto: 'Explora los fundamentos del diseño, metodologías de investigación y análisis crítico.'
    },
    'grafico': {
        titulo: 'GRÁFICO',
        texto: 'Dominio de la forma, el color, la tipografía y la comunicación visual efectiva.'
    },
    'proximamente': {
        titulo: 'PRÓXIMAMENTE',
        texto: 'Estamos preparando contenido increíble para esta sección. ¡Vuelve pronto!'
    }
};

document.querySelectorAll('.Caja').forEach(caja => {
    caja.addEventListener('mouseenter', () => {
        const cat = caja.getAttribute('data-categoria') || 'proximamente';
        document.getElementById('nota-titulo').innerText = descripciones[cat].titulo;
        document.getElementById('nota-texto').innerText = descripciones[cat].texto;
    });
});

// LABORATORIO

let juegoSeleccionado = "";

function seleccionarJuego(elemento, id) {

    document.querySelectorAll('.Maquina').forEach(m => m.classList.remove('Activa'));
    
    elemento.classList.add('Activa');
    juegoSeleccionado = id;
    
    const zona = document.getElementById('Accion');
    zona.style.display = 'block';
    
    console.log("Módulo cargado: " + id);
}

function lanzarJuego() {
    if(juegoSeleccionado) {
        window.location.href = juegoSeleccionado + ".html";
    }
}

const descripcionesJuegos = {
    'retro1': 'Genera un prompt de diseño aleatorio y reta tu creatividad.',
    'retro2': 'Identifica familias tipográficas y anatomía de la letra antes de que se agote el tóner.',
    'retro3': 'Mezcla canales CMYK para igualar el color objetivo y calibrar el sistema visual.',
    'retro4': 'Ajuste de rejillas y retículas para lograr una composición técnica perfecta.'
};

function seleccionarJuego(elemento, id) {
    if (elemento.classList.contains('JuegoBloqueado')) {
        return; 
    }

    document.querySelectorAll('.Maquina').forEach(m => m.classList.remove('Activa'));
    elemento.classList.add('Activa');

    const parrafoDesc = document.getElementById('Descripcion');
    const zona = document.getElementById('Accion');

    if (infoJuegos[id]) {
        parrafoDesc.innerText = infoJuegos[id].desc;
        if (zona) {
            zona.style.display = 'block';
            zona.dataset.archivoDestino = infoJuegos[id].archivo;
        }
    }
}

function lanzarJuego() {
    const zona = document.getElementById('Accion');
    const id = zona.dataset.juegoSeleccionado;
    if (id) {
        window.location.href = id + ".html";
    }
}
const infoJuegos = {
    'retro1': {
        desc: 'Genera un prompt de diseño aleatorio y reta tu creatividad.',
        archivo: 'LAB1.html' // El nombre real de tu archivo
    },
    'retro2': {
        desc: 'Atrevete a diseñar con nuesvos y fabulosos estilos grafico.',
        archivo: 'LAB2.html'
    },
    'retro3': {
        desc: 'Mezcla canales de color, fuentes y estilos para crear un sistema visual.',
        archivo: 'LAB3.html' // El nombre real de tu archivo
    },
    'retro4': {
        desc: 'Ajuste de rejillas y retículas para lograr una composición técnica perfecta.',
        archivo: 'LAB4.html'
    }
};

function seleccionarJuego(elemento, id) {
    // Quitar clase activa de los demás
    document.querySelectorAll('.Maquina').forEach(m => m.classList.remove('Activa'));
    
    // Activar el seleccionado
    elemento.classList.add('Activa');

    const parrafoDesc = document.getElementById('Descripcion');
    const zona = document.getElementById('Accion');

    if (infoJuegos[id]) {
        parrafoDesc.innerText = infoJuegos[id].desc;
        
        // Guardamos el NOMBRE DEL ARCHIVO en el dataset del botón
        if (zona) {
            zona.style.display = 'block';
            zona.dataset.archivoDestino = infoJuegos[id].archivo;
        }
    }
}

function lanzarJuego() {
    const zona = document.getElementById('Accion');
    const archivo = zona.dataset.archivoDestino;
    
    if (archivo) {
        // IMPORTANTE: Salimos de MENU/ y entramos a LABORATORIO/
        window.location.href = "../LABORATORIO/" + archivo;
    }
}