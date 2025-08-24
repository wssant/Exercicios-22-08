const leia = require('readline-sync')
let num1, num2, num3, num4, resultado

num1 = leia.questionInt("Digite o primeiro numero: ")
num2 = leia.questionInt("Digite o segundo numero: ")
num3 = leia.questionInt("Digite o terceiro numero: ")
num4 = leia.questionInt("Digite o quarto numero: ")
resultado = (num1 * num2) - (num3 * num4)

console.log("O valor da equacao é: " + resultado)
