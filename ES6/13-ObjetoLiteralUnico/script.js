let assinatura = {
    idCliente: 1000,
    descricao: "Acesso a Internet",
    status() {
        console.log("Ativo")
    }
}

console.log(assinatura.descricao)

let y = assinatura

console.log(y.descricao)

y.descricao = "Internet + tv + telefone"

console.log(assinatura.descricao)
console.log(y.descricao)