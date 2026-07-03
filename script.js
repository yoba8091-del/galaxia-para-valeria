const boton = document.getElementById("btnMensaje");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
    if (mensaje.style.display === "block") {
        mensaje.style.display = "none";
    } else {
        mensaje.style.display = "block";
    }
});
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.innerHTML = "💖";
    corazon.className = "corazon";
    corazon.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(corazon);
}
setInterval(crearCorazon, 800);
boton.addEventListener("click", () => {
    for (let i = 0; i < 20; i++) {
        setTimeout(crearCorazon, i * 100);
    }
});
function escribirTexto(elemento, texto, velocidad) {
    elemento.textContent = "";
    let i = 0;

    const intervalo = setInterval(() => {
        elemento.textContent += texto.charAt(i);
        i++;

        if (i >= texto.length) {
            clearInterval(intervalo);
        }
    }, velocidad);
}
