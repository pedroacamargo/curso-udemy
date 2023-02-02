// 3 escopos : global, função e o bloco

var serie = 'Friends'


// escopo de bloco
if (true) {
    var serie2 = "Game of Thrones"
    document.write(serie)
}

document.write("<br>")

document.write(serie2)

document.write("<br>")

function x() {
    var serie3 = "The walikng dead"
    document.write(serie)
    document.write(serie3)



}

x()