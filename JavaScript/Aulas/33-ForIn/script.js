let listaConvidados = ['Jorge', 'Jamilton', 'José', 'Ana', 'Maria']
listaConvidados['a'] = 'Jorjão'
listaConvidados[10] = 'Jamiltinho'
listaConvidados["zebra"] = 'Zézão'
listaConvidados[true] = 'Marcela'


for (let x in listaConvidados) {
    document.write(`O convidado ${listaConvidados[x]} é perito <br>`)
}