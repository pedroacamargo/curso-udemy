// contexto spread

// string
let tituloArtigo = 'Como utilizar o operador rest/spread'

console.log(tituloArtigo)
console.log(...tituloArtigo) // "C o m o   u t i l i z a r ....."

console.log([...tituloArtigo])


// arrays
let listaCursos1 = ['NodeJS e MongoDB', 'ES6, TypeScript e Angular 4']
let listaCursos2 = ['Multiplataforma Android/IOS','Introdução ao GNU/Linux']
let listaCursosCompleto = ['Web Completo', 'Android Completo',...listaCursos1, ...listaCursos2]


console.log(listaCursosCompleto)

let pessoa = { nome: 'João', idade: 27 }
let clone = { endereco: 'Rua Abc', ...pessoa }

console.log(clone)