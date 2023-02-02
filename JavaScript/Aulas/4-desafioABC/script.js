var a = 10

var b = 20

var c = null

c = a
a = b
b = c
c = null

document.write(`Variável a -> ${a} || Variável b -> ${b} || Variável c -> ${c}`)