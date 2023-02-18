const modal = document.getElementById("modalRegistaDespesa")
const modalLabel = document.getElementById("modalLabel")
const modalMsg = document.getElementById("modalMsg")
const modalBtn = document.getElementById("modal-btn")

class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados() {
        for(let i in this) {
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        } 
        return true
    }
}

class Bd {

    constructor() {
        let id = localStorage.getItem('id')

        if (id === null) {
            localStorage.setItem('id',0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1 
    }

    gravar(d) {
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros() {
        //array de despesas
        let despesas = []

        let id = localStorage.getItem("id")
        // recuperar todas as despesas cadastradas em localStorage
        for (let i = 1; i <= id; i++) {

            // recuperar a despesa
            let despesa = JSON.parse(localStorage.getItem(i))

            // existe a possibilidade de haver índices que foram pulados/removidos
            // nestes casos vamos pular esses índices

            if(despesa == null) {
                continue
            }

            despesas.push(despesa)
            
        }

        return despesas
    }
}

let bd = new Bd()

function cadastrarDespesa() {
    let ano = document.getElementById("ano")
    let mes = document.getElementById("mes")
    let dia = document.getElementById("dia")
    let tipo = document.getElementById("tipo")
    let descricao = document.getElementById("descricao")
    let valor = document.getElementById("valor")


    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )
    
    if (despesa.validarDados()) {
        bd.gravar(despesa)
        // dialog de sucesso
        $('#modalRegistaDespesa').modal('show')
    } else {
        // dialog erro
        $('#modalRegistaDespesa').modal('show')
        modalLabel.style.color = "red"
        modalLabel.innerHTML = "Erro"
        modalMsg.innerHTML = "Por favor, insira os dados corretamente para cadastrar a sua despesa."
        modalBtn.style.backgroundColor = "red"
    }
}

function carregaListaDespesas() {
    let despesas = []

    despesas = bd.recuperarTodosRegistros()

    // Selecionando o elemento tbody da tabela
    const listaDespesas = document.getElementById("listaDespesas")

    // percorrer o array despesas listando cada array despesa de forma dinâmica
    despesas.forEach( function(d) {


        

        // Criando a linha (tr)
        let linha = listaDespesas.insertRow()

        // criar as colunas (td)
        linha.insertCell(0).innerHTML = d.dia + "/" + d.mes + "/" + d.ano

        // ajustar o tipo
        switch(parseInt(d.tipo)) {
            case 1: d.tipo = "Alimentação"
                break
            case 2: d.tipo = "Educação"
                break
            case 3: d.tipo = "Lazer"
                break
            case 4: d.tipo = "Saúde"
                break
            case 5: d.tipo = "Transporte"
                break
        }

        linha.insertCell(1).innerHTML = d.tipo

        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor
    })
}




// ------ ANOTAÇÕES ---------


// JSON.stringfy(objeto) -> transforma o objeto em uma string JSON

// JSON.parse(JSON) -> transforma a string JSON em um objeto

// array.insertRow() -> cria tr's no documento html