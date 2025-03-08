/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 29.

Este exemplo verifica se um número é múltiplo de 4 e 6, mas não de 12.*/

let num = Number(prompt('Digite um número'))
if (num % 4 === 0 && num % 6 === 0 && num % 12 !== 0) {
    console.log(num, "é múltiplo de 4 e 6, mas não de 12.")
} else {
    console.log(num, "não atende à condição.")
}