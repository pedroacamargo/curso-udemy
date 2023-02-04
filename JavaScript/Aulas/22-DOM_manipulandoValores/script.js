function distribuiCaracter() {
    let caracter = document.getElementById("entrada").value
    // limpar o campo de digitação
    document.getElementById("entrada").value = ""
    console.log(caracter)

    // limpar espaços em branco nas extremidades da string
    caracter.trim()


    switch(caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            // adicionar o caractere no campo referente a números
            document.getElementById("numeros").value += caracter
            break
        default:
            // adicionar o caractere no campo referente a letras
            document.getElementById("letras").value += caracter
    }

}