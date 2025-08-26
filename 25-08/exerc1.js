const leia = require('readline-sync')

// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

let A, B, C, total

A = leia.questionInt("Digite o numero A:" )
B = leia.questionInt("Digite o numero B: ")
C = leia.questionInt("Digite o numero C: ")
total = A + B
if (total > C) {
console.log("A soma de A + B é maior que C" )
}

else if (total == C){
    console.log("A + B é igual a C")
}

else {
console.log("A soma de A + B é menor que C")
}

