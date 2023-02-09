// um software de marcenaria
// cadeira e sofá

// paradigma procedural
// cadeira
let qtde_pernas = 4
let giratoria = false
let cor = 'azul'

let cadeiras = []
cadeiras[0] = []
cadeiras[0]['qtde_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'
cadeiras[1] = []
cadeiras[1]['qtde_pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelha'


function girarCadeira(indice) {
    if (cadeiras[indice]['giratoria'] == true) {
        console.log("girou")
    } else {
        console.log("cadeira não é giratória")
    }
}

function adicionarCadeira(qtde_pernas, giratoria, cor) {
    let cadeira = []
    cadeira['qtde_pernas'] = qtde_pernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor

    cadeiras.push(cadeira)
}
adicionarCadeira(3, false, 'verde')

console.log(cadeiras)

girarCadeira(1)

console.log('')

// paradigma de OO
class Cadeira {
    constructor(qtde_pernas, giratoria, cor) {
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira() {
        if (this.giratoria == true) {
            console.log("girou")
        } else {
            console.log("cadeira não é giratória")
        }
    }
}

let cadeira1 = new Cadeira(4, false, 'azul')
let cadeira2 = new Cadeira(1, true, 'verde')

let arrayCadeiras = []
arrayCadeiras.push(cadeira1,cadeira2)

cadeira1.girarCadeira()
console.log(arrayCadeiras)

// sofá
class Sofa {
    constructor(lugares, reclinavel, cor, inclinado) {
        this.lugares = lugares
        this.reclinavel = reclinavel
        this.cor = cor
        this.inclinado = inclinado
    }

    reclinar() {
        if (this.reclinavel == true) {
            console.log(`O sofá foi inclinado`)
            if (this.inclinado == true) {
                this.inclinado = false
            } else {
                this.inclinado = true
            }
        } else {
            console.log("Impossível inclinar o sofá")
        }
    }
}

let sofas = []

sofas.push(new Sofa(6,true,'azul',false),new Sofa(4,false,'vermelho',false))

sofas[0].reclinar()

console.log(sofas)