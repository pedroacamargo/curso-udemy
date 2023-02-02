// função void -> não retornam nada, so tem uma lógica
// função retorno -> retornam algo


function calcularAreaTerreno(largura, comprimento) {
    var area = largura * comprimento
    return area
}


console.log(calcularAreaTerreno(10,40))


function soma(a,b) {
    // b = b === undefined ? 0 : b
    return a + b
}

console.log(soma(7,7))
console.log(soma(10,20,30,55,10)) // desconsidera os parâmetros adicionais


console.log(soma(7)) // NaN