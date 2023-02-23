// generators sao funções especiais

function* testeGenerator() {
    console.log("Teste 1")
    yield console.log("Teste 2") // yield vai executar tudo antes dela e o que está na linha atual
    console.log("Teste 3")

    return "Teste 4"
}

let meuGenerator = testeGenerator() // objeto iterator
// console.log(meuGenerator)

meuGenerator.next()
console.log("----")
meuGenerator.next()
