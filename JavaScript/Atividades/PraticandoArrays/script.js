let objetos = ['cadeira', 'impressora', 'garfo']

const entrada = document.getElementById("entrada")

function adicionar() {
    let text = entrada.value
    let formatedText = text.toLowerCase().trim()


    if (text == "") {
        alert("Informe um valor válido")
    } else {
        if (objetos.indexOf(formatedText) != -1) {
            alert("Objeto já foi adicionado.")
        } else {
            objetos.push(formatedText)
            console.log(objetos)
            entrada.value = ""
        }
    }

}

function ordenar() {
    objetos.sort()
    console.log(objetos)
}