

function clicaBotao (evento) {
    let conteudo = document.getElementsByClassName("input")
    let textoDigitado = document.getElementById("container")
    textoDigitado.innerHTML += '<p>' + conteudo.value + '</p>'
}

