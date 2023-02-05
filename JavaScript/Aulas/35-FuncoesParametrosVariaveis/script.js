function soma() {
    let resultado = 0

    for (let i in arguments) {
        resultado += arguments[i]
    } 
    return resultado
}

console.log(soma(7, 5, 3.2,0.8))


// o comando arguments dá todos os parâmetros dados na função