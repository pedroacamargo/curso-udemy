// requisição http
// resposta http

let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'única',
    aro: 12,
    pedalar() {
        console.log("Método pedalar executado.")
    }
}
let Bicicleta2 = {
    cor: 'Vermelha',
    marcha: 'única',
    aro: 6,
    pedalar() {
        console.log("Método pedalar executado.")
    }
}

console.log(Bicicleta1)
console.log(Bicicleta2)

let BicicletaFactory = function(cor,marcha,aro) {
    // lógica
    // requisição http
    // resposta http
    return {
        cor,
        marcha,
        aro,
        pedalar() {
            console.log("Método pedalar executado")
        }
    }
}

let Bicicleta3 = BicicletaFactory('Azul','18',12)
console.log(Bicicleta3)