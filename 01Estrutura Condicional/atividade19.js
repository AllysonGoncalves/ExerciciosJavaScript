/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 19. 

Faça um programa que receba três numeros inteiros, calcule e mostre a soma desses numeros.
*/

let num1 = parseInt(prompt('Digite o primeiro númrero'))
let num2 = parseInt(prompt('Digite o segundo númrero'))
let num3 = parseInt(prompt('Digite o terceiro númrero'))

let soma = (num1 + num2 + num3)

//IsNaN > Se o usuário inserir algo que não seja um número (como letras ou um campo vazio), isNaN(num) detecta isso e exibe uma mensagem apropriada.
if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
    alert('Invalido! Digite novamente...')
}else{
    alert(`Soma de ${num1} + ${num2} + ${num3} = ${soma}`)
    console.log('SOMA =' + soma)
}