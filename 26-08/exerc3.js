const leia = require('readline-sync')
// Ecreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos. 
// 1 cenario: finalizar ao digitar 0
// 2 cenario: digitar numero
// 3 cenario somar os numeros positivos

let numero
let soma = 0

do {
    numero = leia.questionInt("Digite um numero: ")
    if (numero > 0){
       soma += numero
    }

} while(numero != 0)

console.log('Soma dos números positivos digitados:', soma)