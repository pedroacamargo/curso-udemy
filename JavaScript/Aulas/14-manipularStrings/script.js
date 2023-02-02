// propriedade length -> retorna a quantidade de caracteres de um string

let nome = "   Pedro Augusto Ennes           "

console.log(nome.length)
console.log(nome.charAt(4))  // a char que está no index 4
console.log(nome.indexOf("e")) // o index que é a primeira ocorrência de "e"
console.log(nome.replace(" ", "|||"))
console.log(nome.substr(6,4))
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.trim()) // Remove os espaços em branco nas extremidades de uma string