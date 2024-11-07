const enviar = document.getElementById("enviar");
if (enviar) {
    enviar.addEventListener("click", (e) => {
        e.preventDefault();
        location.replace("./gracias.html");
    })
}
