/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 09. 

Faça um programa que leia um número, verifique se este número é positivo ou
negativo. Se for negativo mostre a mensagem "Você digitou um numero negativo", Senão
mostre:" Voce digitou um número positivo. */

// Entrada de dados
let numero = Number(prompt('Digite um número:'))
//IsNaN > Se o usuário inserir algo que não seja um número (como letras ou um campo vazio).
if (isNaN(numero)){
    alert('Erro, digite apenas numeros.')
}else if(numero >= 0){
    alert('Você digitou um número: POSITIVO.')
}else{
    alert('Você digitou um número: NEGATIVO')
}


//OU ||

/*let num = Number(prompt('Digite um numero'))

if (num >= 0){
    alert('Voce digitou um número positivo.')
}else if(num < 0){
    alert('Você digitou um numero negativo')
}else{
    alert('invalido')
}*/