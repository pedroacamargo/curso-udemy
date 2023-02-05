// setTimeout, clearTimeout, setInterval, clearInterval

setTimeout(function() {
    document.write('Teste')
},2000)

let i = 5

var x = setInterval(function() {

    document.write(i)
    i--

    if (i == 0) {
        clearInterval(x)
    }
},1000)