function contarUmaHistoria(personagem="Fubá",atividade="passear",nome_dono="Jorge") {
    document.write(`Era uma vez um cachorro chamado ${personagem}, ele adorava ${atividade}, seu dono era o ${nome_dono} e eles viveram felizes para sempre`)
}

contarUmaHistoria(undefined, "enterrar ossos", "Pedro")

// o undefined dará o valor default para a função