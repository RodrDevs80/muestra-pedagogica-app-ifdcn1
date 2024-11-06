const enviar = document.getElementById("enviar");

enviar.addEventListener("click", (e) => {
    e.preventDefault();
    location.replace("./gracias.html");
})