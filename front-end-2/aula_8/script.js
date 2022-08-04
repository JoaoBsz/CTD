const form = document.querySelector("form")
const userInput = document.getElementById("entrada")

function stopLoad(evt) {
    evt.preventdefault()
}

function addEventos() {
    form.addEventListener("submit", stopLoad)
}

