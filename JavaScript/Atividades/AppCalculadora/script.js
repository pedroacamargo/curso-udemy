function calcular(tipo, valor) {
    const result = document.getElementById("resultados")
    if (tipo === "acao") {
        
        if (result.value === "" && valor != "c") {
            result.value = "Escolha um valor válido"
        } else {
            switch(valor) {
                case 'c':
                    result.value = ""
                    break
                case '=':
                    result.value = eval(result.value)
                    break
                default:
                    result.value += valor
            }
        }

    } else if (tipo == "valor") {
        
        if (result.value === "Escolha um valor válido") {
            switch (valor) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    result.value = valor
            }
        } else {
            switch (valor) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    result.value += valor
            }
        }


    }

}