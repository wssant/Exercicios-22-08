const leia = require('readline-sync');

let salario, abono, total


salario = leia.questionInt("Digite o salario: ");
abono = leia.questionInt("Digite o abono: ")
total = salario + abono
console.log("Valor do salario: " + total)