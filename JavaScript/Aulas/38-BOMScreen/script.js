var height = window.screen.availHeight
var width = window.screen.availWidth

document.write(`A altura do navegador é: ${height} <br> A largura do navageador é ${width}`)

if (width < 500) {
    document.write("Lógica para impressão do meu dispositivo mobile")
} else {
    document.write("Lógica para impressão do meu dispositivo web")    
}