
for (let x = 1; x <=10; x++){
    document.write("<h5>Tabuada do " + x + "</h5>")
    for (let i = 1; i <= 10; i++) {
        document.write(`${x} x ${i} = ${x*i} <br>`)
    }   
    document.write("<hr>")
}

let i = 0
let z = 0

while (i <= 10) {
    document.write(`<h3>Tabuada do ${i}</h3>`)
    while (z <= 10) {
        document.write(`${i} x ${z} = ${i * z} <br>`)
        z++
        if (z == 10) {
            document.write(`${i} x ${z} = ${i * z} <br>`)
            z = 0
            break
        }
    }
    i++
}

