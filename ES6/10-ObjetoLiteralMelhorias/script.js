let nome = 'Pedro' // document.getElementById("nome").value
let idade = 18
let sexo = "Marculino"
let profissao = "Hacker"

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${profissao} `)
    }
}

console.log(objeto)
objeto.exibirResumo()

let objeto2 = {
    nomeTeste: nome, // nome = nome variável / valor = valor da variável
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${profissao} `)
    }
}

console.log(objeto2)