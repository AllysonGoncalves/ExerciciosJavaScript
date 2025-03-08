/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 18.

Faça um programa que leia 5 números e informe o maior número.*/

let maiorNumero = Number(prompt("Digite o 1º número:"))

for (let i = 1; i < 5; i++) { // Começa do 1 porque já pegamos o primeiro número
    let num = Number(prompt(`Digite o ${i + 1}º número:`))

    if (num > maiorNumero) {
        maiorNumero = num // Atualiza se o número for maior
    }
}

alert(`O maior número é: ${maiorNumero}`)
console.log(`O maior número é: ${maiorNumero}`)



/*let num1 = Number(prompt('Digite o primeiro numero'))
let num2 = Number(prompt('Digite o segundo numero'))
let num3 = Number(prompt('Digite o terceiro numero'))
let num4 = Number(prompt('Digite o quarto numero'))
let num5 = Number(prompt('Digite o quinto numero'))
let maior

if ((isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5))){
    alert('invalido')
}else if(num1 > num2 || num1 > num3 || num1 > num4 || num1 > num5){
    maior = num1
    alert("O maior é o numero = " + maior)
}else if(num2 > num1 || num2 > num3 || num2 > num4 || num2 > num5){
    maior = num2
    lert("O maior é o numero = " + maior)
}else if (num3 > num1 || num3 > num2 || num3 > num4 || num3 > num5){
    maior = num3
    alert("O maior é o numero = " + maior)
}else if(num4 > num1 || num4 > num2 || num4 > num3 || num4 > num5){
    maior = num4
    alert("O maior é o numero = " + maior)
}else{
    maior = num5
    alert("O maior é o numero = " + maior)
}*/