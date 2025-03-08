/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 (Exercícios Básicos)
Ex: 02.
Crie uma função chamada dobro(numero) que receba um número e retorne o dobro dele.
*/
function dobro(numero) {
    return numero * 2
}
let resultado = dobro(5)// Chama a função com o número 5
console.log(resultado)// Saída: 10

/*Explicação:
A função dobro(numero) recebe um parâmetro numero e retorna o resultado de numero * 2.
Chamamos a função passando o número 5 como argumento.
O resultado é impresso no console.
Saída esperada: 10 (porque 5 * 2 = 10)*/


function dobro(numero){
    return numero * 2
}
let resultado2 = dobro(7)// Chama a função com o número 7
console.log(resultado2)// Saída: 14