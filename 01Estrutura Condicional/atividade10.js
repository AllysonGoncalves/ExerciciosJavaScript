/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 10. 

Faça um programa que leia um número, verifique se este número é positivo, negativo
ou Zero. Se for negativo mostre a mensagem "Você digitou um numero negativo", Se for
positivo mostre:" Você digitou um número positivo e se for zero mostre: “Você digitou
zero”.*/

// Entrada de dados
let num = Number(prompt('Digite um numero'))

if(isNaN(num)){
    alert('Invalido')
    console.log('Invalido')
}else if (num > 0){
    alert('Você digitou um número positivo')
    console.log(`Você digitou um número (${num}) positivo`)
}else if(num < 0){
    alert('Você digitou um numero negativo')
    console.log(`Você digitou um número (${num}) negativo`)
}else{
    alert('Você digitou zero')
    console.log('Você digitou zero')
}
