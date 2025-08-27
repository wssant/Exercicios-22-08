const leia = require('readline-sync')

// cenario 1: idade negativa
// encerrar o programa e informar a quantidade de pessoas com cada idade

// cenario 2: idade menor que 21
// incrementar o contador de idade menor que 21

// cenario 3: idade maior que 50
// incrementar o contador de idade maior que 50

// cenario 4: idade entre 21 e 50
// nao fazer nada

let idade = 0;
let contador21 = 0;
let contador50 = 0;

while(idade >= 0) {
    idade = leia.questionInt("Digite a idade: ")

    if(idade > 50){
        contador50 += 1
    }else if(idade < 21 && idade > 0){
        contador21 += 1
    }
}

console.log("Total de pessoas menores de 21 anos: " + contador21);
console.log("Total de pessoas maiores de 50 anos: " + contador50);