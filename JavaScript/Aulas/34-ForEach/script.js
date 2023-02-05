let listaFuncionarios = ['Viviane', 'Rosângela', 'Miguel', 'Lucas', 'Fernanda']

document.write(listaFuncionarios[3] + "<br>")

console.log(listaFuncionarios)
listaFuncionarios.forEach(function(valor, indice, array) {
    console.log("indice " + indice + " | valor: " + valor)


    if (valor == 'Lucas') {
        array[indice] = "Um novo valor"
    }
    
})

console.log(listaFuncionarios)
document.write(listaFuncionarios[3])


// Wrapper
var f = function(valor, indice) {
    console.log(valor, indice)
}

listaFuncionarios.forEach(f)


// o forEach so considera valores de indices numéricos!!!