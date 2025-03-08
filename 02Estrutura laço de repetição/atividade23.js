/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 23.

Escreva um código que receba um número n e calcule a soma dos números de 1 até n.*/

let n = 10//O número n é o valor até o qual vamos somar os números de 1 até n.
let soma = 0//Esta variável vai armazenar o valor acumulado da soma dos números de 1 até n.
let i = 1//Essa variável i será usada como o contador para o laço while.

while (i <= n){
    soma += i
    i++
}
console.log("A soma dos números de 1 até " + n + " é", soma);