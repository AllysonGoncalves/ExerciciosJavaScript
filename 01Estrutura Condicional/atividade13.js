/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 13. 

Faça um programa que leia um número e verifique se este número é par ou ímpar.*/

// Entrada de dados
let num = Number(prompt('Digite um número: '))

if (isNaN(num)){
   alert('Invalido, digite novamente!')
}else if (num % 2 === 0){
   alert('Esse número é par')
 }else if(num % 2 === 1){
   alert('Esse número é ímpar')
 }



 /*let num = Number(prompt('Digite um número'))

 if (num % 2 === 0){
    alert('numero é par')
 }else if(num % 2 === 1){
    alert('número é ímpar')
 }else{
    alert('Invalido, digite novamente!')
 }*/