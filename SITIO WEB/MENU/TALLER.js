let CapaZ = 100;
let ElementoSeleccionado = null;

function CrearSticker() {
    const Mesa = document.getElementById('Mesa');
    const Entrada = document.getElementById('Busqueda');
    const Palabra = Entrada.value || 'art';
    
    const NuevoSticker = document.createElement('img');
    const Semilla = Math.floor(Math.random() * 5000);
    
    // Cambiado a un servicio mas estable para busqueda
    NuevoSticker.src = `https://loremflickr.com/200/200/${Palabra}?lock=${Semilla}`;
    NuevoSticker.classList.add('Sticker');

    let PosX = Math.random() * (window.innerWidth - 150);
    let PosY = Math.random() * (window.innerHeight - 150);
    let Rotacion = Math.floor(Math.random() * 40) - 20;

    NuevoSticker.style.left = PosX + "px";
    NuevoSticker.style.top = PosY + "px";
    NuevoSticker.style.transform = `rotate(${Rotacion}deg)`;

    let Arrastrando = false;
    let InicioX, InicioY;

    NuevoSticker.addEventListener('mousedown', (e) => {
        if (ElementoSeleccionado) {
            ElementoSeleccionado.classList.remove('StickerSeleccionado');
        }
        ElementoSeleccionado = NuevoSticker;
        ElementoSeleccionado.classList.add('StickerSeleccionado');

        Arrastrando = true;
        CapaZ++;
        NuevoSticker.style.zIndex = CapaZ;
        InicioX = e.clientX - NuevoSticker.offsetLeft;
        InicioY = e.clientY - NuevoSticker.offsetTop;
        
        e.stopPropagation(); 
    });

    document.addEventListener('mousemove', (e) => {
        if (Arrastrando && ElementoSeleccionado === NuevoSticker) {
            NuevoSticker.style.left = (e.clientX - InicioX) + "px";
            NuevoSticker.style.top = (e.clientY - InicioY) + "px";
        }
    });

    document.addEventListener('mouseup', () => {
        Arrastrando = false;
    });

    NuevoSticker.addEventListener('wheel', (e) => {
        if (ElementoSeleccionado === NuevoSticker) {
            e.preventDefault();
            const Grados = e.deltaY > 0 ? 10 : -10;
            Rotacion += Grados;
            NuevoSticker.style.transform = `rotate(${Rotacion}deg)`;
        }
    }, { passive: false });

    Mesa.appendChild(NuevoSticker);
}

function BorrarSeleccionado() {
    if (ElementoSeleccionado) {
        ElementoSeleccionado.remove();
        ElementoSeleccionado = null;
    }
}

// Generar iniciales cuando el DOM este listo
document.addEventListener('DOMContentLoaded', () => {
    CrearSticker();
    CrearSticker();
});

// Deseleccionar al tocar el fondo
document.addEventListener('mousedown', (e) => {
    if (e.target.id === 'Mesa' || e.target.tagName === 'HTML' || e.target.className === 'EspacioTrabajo') {
        if (ElementoSeleccionado) {
            ElementoSeleccionado.classList.remove('StickerSeleccionado');
            ElementoSeleccionado = null;
        }
    }
});