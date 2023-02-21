let funcionarios = [ {nome: 'Fernanda', cargo: 'Analista de RH', salario: 3100, status: 'ativo'}, {nome: 'Miguel', cargo: 'Assistente ADM', salario: 1700, status: 'ativo'}, {nome: 'Rosa', cargo: 'Auxiliar de Contabilidade', salario: 1600, status: 'inativo'}, {nome: 'Roberto', cargo: 'Programador PHP', salario: 4500, status: 'ativo'}, {nome: 'Maria', cargo: 'Engenheira Mecânica', salario: 7500, status: 'ativo'}]

console.log(funcionarios)


// filter espera uma função de callback como parâmetro
// o f dentro do parâmetro da função é o indice do array em causa
funcionarios.filter(function(f) { return f.salario < 2000 }).filter(function(f) {return f.status == 'ativo'})

funcionarios.filter(f => f.salario < 3500).filter(f => f.status == 'ativo')