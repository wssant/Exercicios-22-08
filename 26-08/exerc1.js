const leia = require('readline-sync')

//Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
// cenario 1: primeiro numero é menor q o segundo numero
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.
// cenario 2: primeiro numero é maior que o segundo
// exiba mensagem de erro informando intervalo invalido e encerre o programa
// cenario 3: primeiro numero é igual ao segundo

const primeiroNumero = leia.questionInt("Digite o primeiro numero: ")
const segundoNumero = leia.questionInt("Digite o segundo numero: ")

if(primeiroNumero > segundoNumero){
    console.log("Intervalo inválido!")
}else if(primeiroNumero < segundoNumero){
    for(let contador = primeiroNumero; contador < segundoNumero; contador++){       
        if(contador % 3 == 0 && contador % 5 == 0){
            console.log("%i é divisivel por 3 e 5", contador)
        }
    }
}else{
    console.log("Intervalo inválido!")
}
