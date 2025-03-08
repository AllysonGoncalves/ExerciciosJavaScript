/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 13.

Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
*/
let num1 = parseInt(prompt('Digite um número:'))
let num2 = parseInt(prompt('Digite outro número:'))

// Definir o intervalo baseado nos valores fornecidos
let inicio = Math.min(num1, num2)
let fim = Math.max(num1, num2)

// Exibir os números no intervalo
for (let i = inicio + 1; i < fim; i++) {
  console.log(i)
}

//Math.min(num1, num2) é verificar qual dos dois números é o menor. O Math.min() é uma função do JavaScript que retorna o menor valor entre os números que você passar para ela.