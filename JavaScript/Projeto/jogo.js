let altura = 0
let largura = 0
let vidas = 3
let tempo = 60
let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === "normal") {
    criaMosquitoTempo = 1500
} else if (nivel == "dificil") {
    criaMosquitoTempo = 1000
} else if (nivel === "impossivel") {
    criaMosquitoTempo = 750
}


document.getElementById('cronometro').innerHTML = tempo

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    // console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

// Cronometro 
let cronometro = setInterval(function() {
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = "win.html"
    } else {

        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

// criar o elemento html
function criarMosquito() {

    // remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        if (vidas <= 0) {
            window.location.href = "gameover.html"
        } else {
            document.getElementById("v"+vidas).src = "imagens/coracao_vazio.png"
            vidas--

        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    let mosquito = document.createElement('img')
    mosquito.src = "imagens/mosca.png" 
    mosquito.style.top = posicaoY + "px"
    mosquito.style.left = posicaoX + "px"
    mosquito.style.position = "absolute"
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }
    
    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return "mosquito1"
        case 1:
            return "mosquito2"
        case 2:
            return "mosquito3"
    }

}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return "ladoA"
        case 1:
            return "ladoB"
    }

}

let criaMosca = setInterval( function() {
    criarMosquito()
} ,criaMosquitoTempo) 