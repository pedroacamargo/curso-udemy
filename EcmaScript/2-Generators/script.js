// implementar um chat com uma função generator, dependendo da resposta dada, vamos seguir diferentes fluxos.

function* conversar() {

    // escopo próprio
    // opcao

    let opcao = yield 'E ai, tudo bem?'

    // o parametro enviado no next
    if (opcao == 'sim') {
        yield "Ótimo, fico feliz"

        opcao = yield 'Como eu posso te ajudar? Quer uma piada para começar?'

        if (opcao == 'sim') {
            
            fetch("dados/piadas.json")
                .then(resposta => resposta.json())
                .then(piadas => {
                    let idx = Math.floor(Math.random() * 10)
                    let piada = piadas[idx]

                    console.log(piada.piada)

                    setTimeout( () => {
                        console.log(piada.resposta)
                        console.log("KKKKKKKKKK")
                    },4000)
                })

                yield "Digite 1 para compras, 2 para vendas ou 3 para falar com um atendente.."

        } else {
            yield "Digite 1 para compras, 2 para vendas ou 3 para falar com um atendente.."
        }


    } else {
        yield 'Respire fundo e tenha paciência'

        yield 'Digite 1 para compras, 2 para vendas ou 3 para falar com um atendente.'
    }

    return "Atendimento Finalizado."
    
}

let conversa = conversar() // objeto iterator

function acao() {
    
    let resposta = document.getElementById("resposta").value
    let iteracao = conversa.next(resposta)
    console.log(iteracao)
    
    if (iteracao.done) {
        document.getElementById("teste").style.display = 'none'
    } 
    
}