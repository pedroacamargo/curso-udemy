class Animal {
    constructor(cor,tamanho,peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir() {
        console.log('Dormir')
    }
}

class Passaro extends Animal {
    constructor(bico,cor,tamanho,peso) {
        super(cor,tamanho,peso)
        this.bico = bico
    }

    voar() {
        console.log("Voar")
    }
}

class Papagaio extends Passaro {
    constructor(sabeFalar,bico,cor,tamanho,peso) {
        super(bico,cor,tamanho,peso)
        this.sabeFalar = sabeFalar
    }

    falar() {
        console.log('Falar')
    }
}

let passaro = new Passaro()
let papagaio = new Papagaio(true, "Pontiagudo", "Amarelo",10,350)

console.log(papagaio)