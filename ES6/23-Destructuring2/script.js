let produto = {
    descricao: "Notebook",
    preco: 1800,
    detalhes: {
        fabricante: 'abc',
        modelo: 'xyz'
    }
}

// token
// array => []
// objeto => {}

// let { descricao, preco} = produto

// let {descricao: d,preco: p, desconto = 5} = produto

let { detalhes: {fabricante: f,modelo: m = 'não informado'} } = produto

console.log(f,m)