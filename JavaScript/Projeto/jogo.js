let altura = 0
let largura = 0
let vidas = 3
let tempo = 60
let criaMosquitoTempo = 1500

const audioKill = new Audio("audio/morte2.mp3")

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

    let particula1X = posicaoX + 22
    let particula1Y = posicaoY + 19
    let particula2X = posicaoX + 30
    let particula2Y = posicaoY + 30
    let particula3X = posicaoX + 26
    let particula3Y = posicaoY + 28
    let particula4X = posicaoX + 34
    let particula4Y = posicaoY + 15


    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    let particula1 = document.createElement('div')
    particula1.style.position = "absolute"
    particula1.style.top = particula1Y + "px"
    particula1.style.left = particula1X + "px"
    particula1.style.width = "10px"
    particula1.style.height = "10px"
    particula1.style.backgroundColor = "red"
    particula1.style.borderRadius = "100%"

    let particula2 = document.createElement('div')
    particula2.style.position = "absolute"
    particula2.style.top = particula2Y + "px"
    particula2.style.left = particula2X + "px"
    particula2.style.width = "10px"
    particula2.style.height = "10px"
    particula2.style.backgroundColor = "red"
    particula2.style.borderRadius = "100%"

    let particula3 = document.createElement('div')
    particula3.style.position = "absolute"
    particula3.style.top = particula3Y + "px"
    particula3.style.left = particula3X + "px"
    particula3.style.width = "10px"
    particula3.style.height = "10px"
    particula3.style.backgroundColor = "red"
    particula3.style.borderRadius = "100%"

    let particula4 = document.createElement('div')
    particula4.style.position = "absolute"
    particula4.style.top = particula4Y + "px"
    particula4.style.left = particula4X + "px"
    particula4.style.width = "10px"
    particula4.style.height = "10px"
    particula4.style.backgroundColor = "red"
    particula4.style.borderRadius = "100%"

    let mosquito = document.createElement('img')
    mosquito.src = "imagens/mosca.png" 
    mosquito.style.top = posicaoY + "px"
    mosquito.style.left = posicaoX + "px"
    mosquito.style.position = "absolute"
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.id = 'mosquito'


    mosquito.onclick = function() {
        // load serve para resetar o áudio
        audioKill.load()
        // play serve para dar play no áudio
        audioKill.play()
        // faz o mosquito sumir da tela
        this.remove()

        // particulas quando o mosquito é morto
        document.body.appendChild(particula1)
        document.body.appendChild(particula2)
        document.body.appendChild(particula3)
        document.body.appendChild(particula4)



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