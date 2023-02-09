let pessoa = {
    nome: 'Pedro',
    idade: 18
}

console.log(pessoa)

// ------------------------------------------------

pessoa.sexo = 'Masculino'

console.log(pessoa)

pessoa.dizerOi = () => console.log(`Olá, ${pessoa.nome}, tudo bem?`)

console.log(pessoa)
console.log(pessoa.dizerOi())