const leia = require('readline-sync')
let salario, adicional, extra, desconto, liquido

salario = leia.questionFloat("Digite o salario: ")
adicional = leia.questionFloat("Digite o adicional noturno: ")
extra = leia.questionFloat("Digite a hora extra: ")
desconto = leia.questionFloat("Digite o desconto: ")
liquido = salario + adicional + (extra * 5) - desconto

let liquidoFormatado = Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL"
}).format(liquido)

console.log("O salário bruto é: " + liquidoFormatado)