let x = 1


// true
while (x <= 10) {
    //códigos
    document.write(x + "<br>")
    x++
    if (x === 3) {
        continue
    }

    if (x === 5) {
        break
    }

}