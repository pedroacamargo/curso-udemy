

let nota = prompt("Digite a nota do aluno")
let faltas = prompt("Digite a quantidade de faltas do aluno")

let media = 7
var faltas_maximas = 15


if (nota >= media && faltas <= faltas_maximas) {
    document.write("O aluno passou")
} else {
    document.write("Reprovado")
}


// operador ternário
var resultado = (nota >= media && faltas <= faltas_maximas) ? 'Aprovado' : 'Reprovado'


console.log(resultado)