let nome = prompt("Qual seu nome?")
let altura = parseFloat(prompt("Qual sua altura (cm)?"))
let peso = parseFloat(prompt("Qual seu peso (kg)?"))

altura /= 100

let massaCorporal = peso / (altura^2)

console.log(altura ** 2)

let classificacao = ""

if (massaCorporal < 16) {
    classificacao = "Baixo peso, muito grave"
} else if (massaCorporal >= 16 && massaCorporal < 17){
    classificacao = "Baixo peso, grave"
} else if (massaCorporal >= 17 && massaCorporal < 18.5){
    classificacao = "Baixo peso"
} else if (massaCorporal >= 18.5 && massaCorporal < 25){
    classificacao = "Peso normal"
} else if (massaCorporal >= 25 && massaCorporal < 30){
    classificacao = "Sobrepeso"
} else if (massaCorporal >= 30 && massaCorporal < 35){
    classificacao = "Obesidade grau I"
} else if (massaCorporal >= 35 && massaCorporal < 40){
    classificacao = "Obesidade grau II"
} else {
    classificacao = "Obesidade grau III"
}


document.write(`${nome} possui índice de massa corporal igual a ${massaCorporal}, sendo classificado como: ${classificacao}`)