/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 28.

Este exemplo verifica se um número é divisível tanto por 3 quanto por 5.*/

let num = Number(prompt('Digite um número'))
if (num % 3 === 0 && num % 5 === 0) {
    console.log(num, "é múltiplo de 3 e 5.");
} else {
    console.log(num, "não é múltiplo de 3 e 5.");
}