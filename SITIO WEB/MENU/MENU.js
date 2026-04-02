function inyectarNavegacion() {
    if (document.getElementById("BarraNavegacion")) return;

    const esSubcarpeta = window.location.pathname.includes('/LABORATORIO/') || 
                         window.location.pathname.includes('/ACADEMIA/');
    
    const prefijo = esSubcarpeta ? "../MENU/" : "";

    const navHTML = `
    <header class="Encabezado">
        <div class="Logo">
            <h1>DO-DO</h1>
        </div>
        
        <div class="LinksPrincipales">
            <a href="${prefijo}LABORATORIO.html">LABORATORIO</a>
            <a href="${prefijo}ACADEMIA.html">ACADEMIA</a>
            <a href="${prefijo}BIBLIOTECA.html">BIBLIOTECA</a>
            <a href="${prefijo}TALLER.html">TALLER</a>
        </div>

        <nav class="BarraNav" id="BarraNavegacion">
            <div class="ContenedorBotones">
                <a href="${prefijo}INICIO.html" class="BotonEncabezado">INICIO</a>
                <a href="${prefijo}PERFIL.html" class="BotonEncabezado">PERFIL</a>
            </div>
            <button class="MenuHamburguesa" onclick="toggleNav()">☰</button>
        </nav>
    </header>

    <div id="MenuMovil" class="MenuMovil">
        <button class="BotonCerrar" onclick="toggleNav()">×</button>
        <a href="${prefijo}INICIO.html" onclick="toggleNav()">INICIO</a>
        <a href="${prefijo}PERFIL.html" onclick="toggleNav()">PERFIL</a>
        <hr style="border: 0.5px solid #333; width: 100%;">
        <a href="${prefijo}LABORATORIO.html" onclick="toggleNav()">LABORATORIO</a>
        <a href="${prefijo}ACADEMIA.html" onclick="toggleNav()">ACADEMIA</a>
        <a href="${prefijo}BIBLIOTECA.html" onclick="toggleNav()">BIBLIOTECA</a>
        <a href="${prefijo}TALLER.html" onclick="toggleNav()">TALLER</a>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

function toggleNav() {
    const menu = document.getElementById("MenuMovil");
    menu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", inyectarNavegacion);