// array
let arr = [10,20,30,40]

let [ a, ...rest ] = arr

console.log(a,rest)


//objetos

let obj = {
    x:10,
    y:20,
    z:30,
    w:40
}

let { x, ...resto  } = obj

console.log(x,resto)
