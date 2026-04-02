const BOTON = document.getElementById('BotonEnter');
const TICKET = document.getElementById('TicketObjeto');
const TEXTO = document.getElementById('TextoPrompt');

// PROMPTS
const LISTA_PROMPTS = [
    "DISEÑA UN LOGO PARA UN CAFÉ EN LA LUNA",
    "REDISEÑA UNA SILLA PARA UN GIGANTE",
    "CREA UN POSTER USANDO SOLO CÍRCULOS",
    "ESTILO CYBERPUNK + JARDINERÍA",
    "DIBUJA UN MONSTRUO QUE COMA COLORES",
    "INTERFAZ PARA UNA MÁQUINA DEL TIEMPO",
    "CORTA UN PAPEL FÍSICO Y HAZ UN COLLAGE",
    "USA SOLO EL COLOR NEÓN PARA UN RETRATO",
    "ABSTRAE EL CONCEPTO DE 'SILENCIO' EN UN ICONO",
    "EMPAQUE DE UN PERFUME QUE HUELE A LLUVIA",
    "TIPOGRAFÍA INSPIRADA EN CABLES ELÉCTRICOS",
    "INFOGRAFÍA: CUIDADO DE PLANTAS ESPACIALES",
    "REINTERPRETA UNA OBRA CLÁSICA EN PIXELS",
    "INTERFAZ PARA UN TRADUCTOR DE ANIMALES",
    "REVISTA DE DISEÑO INDUSTRIAL AÑO 2099"
];

BOTON.addEventListener('click', () => {
    TICKET.classList.remove('TicketActivo');

    setTimeout(() => {

        const ALEATORIO = Math.floor(Math.random() * LISTA_PROMPTS.length);
        

        TEXTO.innerText = LISTA_PROMPTS[ALEATORIO];
        
        TICKET.classList.add('TicketActivo');
    }, 450); 
});