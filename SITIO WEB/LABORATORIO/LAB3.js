function GenerarHex() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function PaletaAleatoria() {
    const Raiz = document.documentElement;
    Raiz.style.setProperty('--COLOR_PRIMARIO', GenerarHex());
    Raiz.style.setProperty('--FONDO_ESCENARIO', GenerarHex());
    Raiz.style.setProperty('--TEXTO_PRINCIPAL', GenerarHex());
    Raiz.style.setProperty('--FONDO_CARTA', GenerarHex());
}

function CambiarSoloPrimario() {
    document.documentElement.style.setProperty('--COLOR_PRIMARIO', GenerarHex());
}

function CambiarSoloTexto() {
    document.documentElement.style.setProperty('--TEXTO_PRINCIPAL', GenerarHex());
}

function CambiarSoloFondo() {
    document.documentElement.style.setProperty('--FONDO_ESCENARIO', GenerarHex());
}

function AplicarGradiente() {
    const Color1 = GenerarHex();
    const Color2 = GenerarHex();
    const Gradiente = `linear-gradient(135deg, ${Color1}, ${Color2})`;
    document.getElementById('EscenarioPrincipal').style.background = Gradiente;
}

function CambiarDiseno(Modo) {
    const Raiz = document.documentElement;
    if (Modo === 'brutalista') {
        Raiz.style.setProperty('--RADIO_BORDE', '0px');
        Raiz.style.setProperty('--BORDE_CARTA', '5px solid #000');
        Raiz.style.setProperty('--DESENFOQUE_CARTA', '0px');
        Raiz.style.setProperty('--FONDO_CARTA', '#fff');
    } else if (Modo === 'cristal') {
        Raiz.style.setProperty('--RADIO_BORDE', '30px');
        Raiz.style.setProperty('--FONDO_CARTA', 'rgba(255, 255, 255, 0.15)');
        Raiz.style.setProperty('--DESENFOQUE_CARTA', '20px');
        Raiz.style.setProperty('--BORDE_CARTA', '1px solid rgba(255, 255, 255, 0.4)');
    } else {
        Raiz.style.setProperty('--RADIO_BORDE', '16px');
        Raiz.style.setProperty('--FONDO_CARTA', '#ffffff');
        Raiz.style.setProperty('--BORDE_CARTA', '1px solid transparent');
        Raiz.style.setProperty('--DESENFOQUE_CARTA', '0px');
    }
}

function CambiarFuente(Fuente) {
    document.documentElement.style.setProperty('--FUENTE_PRINCIPAL', Fuente);
}