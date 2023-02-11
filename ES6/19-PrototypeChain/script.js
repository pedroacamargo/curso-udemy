Object.prototype.attr50 = 'Z' // cuidado -> todo objeto criado terá essa informação

let animal = {attr1: 'a'}
let vertebrado = {__proto__: animal, attr2: 'b'}
let ave = {__proto__: vertebrado, attr3: 'c'}

console.log(ave.attr2, ave.attr1, ave.attr50, animal.attr50)