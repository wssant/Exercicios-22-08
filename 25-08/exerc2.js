const leia = require('readline-sync')

let opcao, saldo

saldo = 1000.00

console.log("1 - Saldo, 2 - Saque, 3 - Deposito" )

opcao = leia.questionFloat("Digite a opcao desejada: ")

switch(opcao){

case 1:
    saldo = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(saldo)

    console.log("Saldo na conta: " + saldo);
    break
case 2:
    let valorSaque = leia.questionFloat("Digite o valor do saque: ");

    if(valorSaque > saldo){
        console.log("Saldo Insuficiente!")
        break
    }

    saldo -= valorSaque
    saldo = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(saldo)

    console.log("Novo Saldo: " + saldo)
    break
case 3:
    let valorDeposito = leia.questionFloat("Digite o valor do deposito: ");

    if(valorDeposito > saldo){
        console.log("Saldo Insuficiente!")
        break
    }
    
    saldo += valorDeposito
    saldo = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(saldo) 

    console.log("Novo Saldo: " + saldo)
    break
default:
    console.log("Opcao invalida!")
}



