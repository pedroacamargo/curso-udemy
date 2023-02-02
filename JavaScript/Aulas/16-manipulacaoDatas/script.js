var data = new Date()

console.log(data.getDate()) // dia
console.log(data.getMonth() + 1) // mes
console.log(data.getFullYear()) // ano

console.log(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`)

console.log(data.toString())

// Adicionar | remover dias
data.setDate(data.getDate() + 300)
console.log(data.toString())

// Adicionar |remover meses
data.setMonth(data.getMonth() + 4)
console.log(data.toString())

// Adicionar | remover anos
data.setFullYear(data.getFullYear() + 3)
console.log(data.toString())


var d1 = new Date(2017,0,15)
var d2 = new Date(2017,1,23)
var milissegundos_entre_datas = Math.abs(d1.getTime() - d2.getTime())
var milissegundos_por_dia = 1*24*60*60*1000

console.log("-----------------------")
console.log(d1)
console.log(d2)

// converter datas para algo que possamos calcular
console.log(d1.getTime())
console.log(d2.getTime())

// 1 de Janeiro de 1970 até a data em causa

// encontrar a quantidade de milissegundos entre d1 e d2
console.log("Diferença entre as datas:")
console.log(Math.abs(d1.getTime() - d2.getTime()))

// 1 dia -> 24 horas -> 60 minutos -> 60 segundos -> 1000 milissegundos
// então quantos milissegundos existem em um dia?
console.log(`1 dia tem: ${1*24*60*60*1000} milissegundos.`)
console.log("-------------------------------------------------------")
console.log("A diferença entre as datas é de: " + Math.round(milissegundos_entre_datas / milissegundos_por_dia) + " dias")