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

            despesa.id = i
            despesas.push(despesa)
            
        }
        
        return despesas
    }

    pesquisar(despesa) {
        let despesasFiltradas = []

        despesasFiltradas = this.recuperarTodosRegistros()

        console.log(despesasFiltradas)

        // ano
        if (despesa.ano != '') {
            despesasFiltradas = despesasFiltradas.filter(f => f.ano == despesa.ano)
        }

        // mes
        if (despesa.mes != '') {
            despesasFiltradas = despesasFiltradas.filter(f => f.mes == despesa.mes)
        }
        
        // dia
        if (despesa.dia != '') {
            despesasFiltradas = despesasFiltradas.filter(f => f.dia == despesa.dia)
        }

        // tipo
        if (despesa.tipo != '') {
            despesasFiltradas = despesasFiltradas.filter(f => f.tipo == despesa.tipo)
        }

        // descricao
        if (despesa.descricao != '') {
            despesasFiltradas = despesasFiltradas.filter(f => f.descricao == despesa.descricao)
        }
        // valor
        if (despesa.valor != '') {
            despesasFiltradas = despesasFiltradas.filter(f => f.valor == despesa.valor)
        }
        return despesasFiltradas
    }

    remover(id) {
        localStorage.removeItem(id)
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
        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value = ''
        valor.value = ''
    } else {
        // dialog erro
        $('#modalRegistaDespesa').modal('show')
        modalLabel.style.color = "red"
        modalLabel.innerHTML = "Erro"
        modalMsg.innerHTML = "Por favor, insira os dados corretamente para cadastrar a sua despesa."
        modalBtn.style.backgroundColor = "red"
    }
}

function carregaListaDespesas(desp = [], filter = false) {
    
    if (desp.length == 0 && filter == false) {
        desp = bd.recuperarTodosRegistros()
    }


    // Selecionando o elemento tbody da tabela
    const listaDespesas = document.getElementById("listaDespesas")
    listaDespesas.innerHTML = ''

    // percorrer o array despesas listando cada array despesa de forma dinâmica
    desp.forEach( function(d) {


        

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

        // criar o botão de exclusão
        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = `id_despesa_${d.id}`
        btn.onclick = function() {
            // remover a despesa

            let id = this.id.replace('id_despesa_', '')
            

            bd.remover(id)

            window.location.reload()
        }
        linha.insertCell(4).append(btn)
    })
}

function pesquisarDespesa() {
    let ano = document.getElementById("ano").value
    let mes = document.getElementById("mes").value
    let dia = document.getElementById("dia").value
    let tipo = document.getElementById("tipo").value
    let descricao = document.getElementById("descricao").value
    let valor = document.getElementById("valor").value

    let despesa = new Despesa(ano,mes,dia,tipo,descricao,valor)

    let despesas = bd.pesquisar(despesa)

    carregaListaDespesas(despesas, true)
}




// ------ ANOTAÇÕES ---------


// JSON.stringfy(objeto) -> transforma o objeto em uma string JSON

// JSON.parse(JSON) -> transforma a string JSON em um objeto

// array.insertRow() -> cria tr's no documento html