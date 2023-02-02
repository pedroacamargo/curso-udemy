let n1 = parseInt(prompt("Digite um número para somar ou subtrair: "))
let operacao = prompt("Digite 'soma' ou 'subtração': ")
let n2 = parseInt(prompt(`Digite outro número para aplicar a ${operacao}`))


let calcula = function(num1, num2, operacao) {
    if (operacao == "soma" || operacao == "subtração") {
        if (operacao == "soma") {
            return num1 + num2
        } else {
            return num1 - num2
        }
    } else {
        alert("Operação inválida!")
    }    
}

document.write(`O resultado é ${calcula(n1,n2,operacao)}`)
