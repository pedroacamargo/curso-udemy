// Arrow Function -> Forma mais simples para escrever funções anônimas

let quadrado = function(x=5) {
    return x * x
}

document.write(quadrado())

// posso omitir os parenteses caso seja somento 1 parâmetro. Caso seja 0 ou mais do que 1 parâmetro, deverá haver parenteses

let quadrado2 = x => {
    return x * x
}

let quadrado3 = x => x * x // implicit return

document.write("<br>" + quadrado2(5))
document.write("<br>" + quadrado3(5))

document.write("<br>----------------<br>")

let parOuImpar = function(numero) {
    if (numero % 2 === 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

document.write(parOuImpar(4))

let parOuImpar2 = (numero) => {
    if (numero % 2 === 0) {
        return "Par"
    } else {
        return "Impar"
    }
}

let parOuImpar3 = numero => numero % 2 === 0 ? "par" : "impar" // retorno implicito com ternário