const minhasTarefas = document.getElementById("minhasTarefas")

const minhaListaDom = document.getElementById("domingo")
const minhaListaSeg = document.getElementById("seg")
const minhaListaTer = document.getElementById("ter")
const minhaListaQua = document.getElementById("qua")
const minhaListaQui = document.getElementById("qui")
const minhaListaSex = document.getElementById("sex")
const minhaListaSab = document.getElementById("sab")
 
console.log(minhasTarefas)
console.log(minhaListaDom)

function adicionarItem() {
    let item = minhasTarefas.value
    
    minhaListaDom.innerHTML += `<li>${item}</li>`
}