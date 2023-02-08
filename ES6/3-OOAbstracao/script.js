// modelo do objeto
class ContaBancaria {
    //agencia
    //numeroConta
    //saldo
    //limite

    constructor() {
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 450
    }

    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque
    }

    consultarSaldo() {
        return `Saldo total: ${this.saldo}`
    }
}

let pedro = new ContaBancaria()
let angela = new ContaBancaria()

console.log(pedro.consultarSaldo())
pedro.depositar(450)
console.log(pedro.consultarSaldo())
pedro.sacar(200)
console.log(pedro.consultarSaldo())

console.log(angela.consultarSaldo())