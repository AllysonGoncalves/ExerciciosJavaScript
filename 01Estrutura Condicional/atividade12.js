/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 12. 

Faça um programa que leia três notas, calcule e mostre a média aritmética entre elas,
se a media aritmética for:
♦ Media maior ou igual a 7 – ALUNO APROVADO
♦ Media maior ou igual a 5 e menor que 7 – ALUNO EM RECUPERAÇÃO
♦ Media menor que 5 – ALUNO REPROVADO*/

// Entrada de dados
let nota1 = Number(prompt('Digite a primeira nota'))
let nota2 = Number(prompt('Digite a segunda nota'))
let nota3 = Number(prompt('Digite a terceira nota'))

let media = (nota1 + nota2 + nota3) / 3
//Se o usuário inserir algo que não seja um número (como letras ou um campo vazio), isNaN(num) detecta isso e exibe uma mensagem apropriada.
//nota > 10 so aceita notas menores que 10
if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 > 10 || nota2 > 10 || nota3 > 10 || nota1 < 0 ||nota2 < 0 || nota3 < 0){
    alert('Por favor, insira notas válidas entre 0 e 10.')
}else if(media >= 7){
    alert(`Media: ${media.toFixed(2)} \n Aluno(a): APROVADO`)
}else if(media >= 5){
    alert(`Media: ${media.toFixed(2)} \n Aluno(a): RECUPERAÇÃO`)
}else{
    alert(`Media: ${media.toFixed(2)} \n Aluno(a): REPROVADO`)
}

//OBS: Certifique-se de que nota1, nota2 e nota3 realmente são números antes de usar isNaN(). Se os valores forem strings, pode ser necessário convertê-los com parseFloat().