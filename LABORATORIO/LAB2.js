let PosicionX = 50; 
const ObjetoGarra = document.getElementById('Garra');
const ObjetoCuerda = document.getElementById('Cuerda');
const ControlPalanca = document.getElementById('Palanca');
const PantallaResultado = document.getElementById('ResultadoBusqueda');

let Arrastrando = false;
let InicioMouseX = 0;

const ListaEstilos = [
    "MINIMALISMO",
    "BRUTALISMO DIGITAL",
    "BAUHAUS MODERNO",
    "NEUMORFISMO",
    "ESTILO RETRO WAVE",
    "FRUTTIGER AERO",
    "Y2K",
    "GRUNGE EDITORIAL"
];

ControlPalanca.addEventListener('mousedown', (e) => {
    Arrastrando = true;
    InicioMouseX = e.clientX;
});

window.addEventListener('mousemove', (e) => {
    if (!Arrastrando) return;

    let Movimiento = (e.clientX - InicioMouseX) / 2; 
    Movimiento = Math.max(-40, Math.min(40, Movimiento)); 
    ControlPalanca.style.transform = `translateX(${Movimiento}px)`;

    if (Movimiento > 8 && PosicionX < 90) PosicionX += 1.5;
    if (Movimiento < -8 && PosicionX > 10) PosicionX -= 1.5;

    ActualizarGarra();
});

window.addEventListener('mouseup', () => {
    Arrastrando = false;
    ControlPalanca.style.transform = `translateX(0px)`;
});

function ActualizarGarra() {
    ObjetoGarra.style.left = PosicionX + "%";
    ObjetoCuerda.style.left = PosicionX + "%";
}

function BajarGarra() {
    if (ObjetoGarra.style.top !== "0px" && ObjetoGarra.style.top !== "") return;

    PantallaResultado.innerText = "ESCANEARNDO...";
    ObjetoGarra.style.top = "65%"; 
    ObjetoCuerda.style.height = "65%";
    
    setTimeout(() => {
        ObjetoGarra.style.top = "0";
        ObjetoCuerda.style.height = "0";
        GenerarResultado();
    }, 1000);
}

function GenerarResultado() {
    const Azar = Math.floor(Math.random() * ListaEstilos.length);
    const EstiloFinal = ListaEstilos[Azar];
    
    PantallaResultado.innerText = EstiloFinal;
    PantallaResultado.style.color = "#fff";
    
    setTimeout(() => {
        PantallaResultado.style.color = "#00ffcc";
    }, 500);
}

ActualizarGarra();