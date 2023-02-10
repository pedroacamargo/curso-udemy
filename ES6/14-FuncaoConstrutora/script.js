let Carro = function() {
    this.cor = 'Amarelo'
    this.modelo = "Chevette"
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function() {
        //this.velocidadeAtual += 10
        
        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro = new Carro()
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)