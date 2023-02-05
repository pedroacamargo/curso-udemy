let lista_frutas = []

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

let y = 0
console.log(lista_frutas.length)

while (y < lista_frutas.length) {
    document.write(lista_frutas[y] + "<br>")
    y++
}
document.write("<hr>")

for (let i = 0; i < lista_frutas.length;i++) {
    document.write(lista_frutas[i] + "<br>")
}