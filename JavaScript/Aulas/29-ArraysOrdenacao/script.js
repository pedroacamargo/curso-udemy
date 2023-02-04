let lista_frutas = ['Maçã','Uva','Banana','Morango']
let lista_numeros = [12,40,3,7,19,1]

// Ordenar array alfanumérico -> .sort()
console.log(lista_frutas.sort())

// Ordenar array numérico
console.log(lista_numeros.sort(ordenaNumeros))

function ordenaNumeros(a,b) {
    return a - b
    // < 0 -> a ordenado antes de b
    // > 0 -> b ordenado antes de a
    // == 0 -> a ordem é mantida
}