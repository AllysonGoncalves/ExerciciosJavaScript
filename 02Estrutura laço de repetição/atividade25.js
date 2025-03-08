/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 25.

Escreva um código que mostre a tabuada de um número n.*/

let n = Number(prompt('Informe um numero da tabuada:')) 
let i = 1//contador, i é usada para controlar o laço de repetição (o while).

while (i <= 10) {
    console.log(n + " x " + i + " = " + (n * i))
    i++
}