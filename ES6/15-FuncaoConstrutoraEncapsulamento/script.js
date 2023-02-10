// o var atua como um atributo privado do objeto (não da para ver pelo console)

let Carro = function() {
    this.cor = 'Amarelo'
    this.modelo = "Chevette"
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function() {
        //this.velocidadeAtual += 10
        
        let velocidade = this.getVelocidadeAtual() + 50
        if (velocidade > this.velocidadeMaxima) {
            velocidade = this.velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro1 = new Carro()
console.log(carro1.velocidadeAtual)
carro1.acelerar()
console.log(carro1.velocidadeAtual)
carro1.acelerar()
console.log(carro1.velocidadeAtual)
carro1.acelerar()
console.log(carro1.velocidadeAtual)
carro1.acelerar()
console.log(carro1.velocidadeAtual)
carro1.acelerar()
console.log(carro1.velocidadeAtual)
carro1.acelerar()


let Carro2 = function() {
    var velocidadeMaxima = 180
    var quilometrosRodados = 0

    this.cor = 'Amarelo'
    this.modelo = "Chevette"
    this.velocidadeAtual = 0

    this.acelerar = function() {
        //this.velocidadeAtual += 10
        
        let velocidade = this.getVelocidadeAtual() + 50
        if (velocidade > velocidadeMaxima) {
            velocidade = velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
        setQuilometrosRodados(0.05)
        console.log(quilometrosRodados)
    }

    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }

    var setQuilometrosRodados = function(km) {
        quilometrosRodados += km
    }
}


let carro = new Carro2()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
