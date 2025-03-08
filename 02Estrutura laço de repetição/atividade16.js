/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 16.

Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 
*/
let nota = Number(prompt('Informe a nota entre zero e dez:'))

if (nota < 0 || nota > 10){
    alert('Valor invalido')
}else{
    alert('Sua nota = '+ nota)
}
