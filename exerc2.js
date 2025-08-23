const leia = require ('readline-sync')

let nota1, nota2, nota3, nota4, media

nota1 = leia.questionFloat("Digite a primeira nota: ")
nota2 = leia.questionFloat("Digite a segunda nota: ")
nota3 = leia.questionFloat("Digite a terceira nota: ")
nota4 = leia.questionFloat("Digite a quarta nota: ")
media = (nota1 + nota2 + nota3 + nota4) / 4
console.log ("A media é: " + media)