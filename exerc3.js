const leia = require ('readline-sync')
let salario, adicional, extra, desconto, liquido

console.log(
salario = Intl.NumberFormat  
    style: "currency"
    currency "BRL"
    ).format(salario)

    salario = leia.questionFloat ("Digite o salário: ")
    adicional = leia.questionFloat ("Digite o adicional noturno: ")
    extra = leia.questionEMail ("Digite a hora extra: ")
    desconto = leia.questionFloat ("Digite o desconto")
    liquido = salario + adicional (extra * 5) - desconto

    console.log("O salário bruto é: " + liquido)