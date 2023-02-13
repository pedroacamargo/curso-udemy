// destructuring

let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

let f = frutas[0]

// let [ a, b, ,c ] = frutas // pular um índice

let [ a, b = "Abacate", c, d, e = 'Banana'] = frutas // abacate não aparecerá, pois uva já é o valor de b

console.log(a,b,c,d,e)

let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'],['José','Maria']]

let [,[,m]] = coisas // pula o primeiro array e depois pula o primeiro nome do array de nomes

console.log(m)

let [[,,p],] = coisas

console.log(p)

