const aluno = {
    nome: "Rodrigo Carvalho",
    idade: 19,
    curso: "Literatura",
    faculdade: 'URFJ'
}

const array = [1, 2, 3, 4]

var printaluno = function() {
    console.log('Nome Completo: ' + aluno.nome)
    console.log('Idade: ' + aluno.idade)
    console.log('Curso: ' + aluno.curso)
    console.log('Faculdade: ' + aluno.faculdade)
}

var printarray = function() {
    console.log('Nº: ', array[0])
    console.log('Nº: ', array[1])
    console.log('Nº: ', array[2])
    console.log('Nº: ', array[3])
}
printaluno()
printarray()
