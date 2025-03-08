/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 11.

Faça um programa que leia 5 números e informe a soma e a média dos números. 
*/

for (let i = 1; i <= 5; i++){
    let num = Number(prompt(`Digite o ${i}º número:`)); // Lê um número do usuário
    soma += num// Soma os números
}
let media = soma / 5 // calcula a media

// Exibe os resultados
alert(`A soma dos números é: ${soma}`)
alert(`A média dos números é: ${media}`)

console.log(`A soma dos números é: ${soma}`)
console.log(`A média dos números é: ${media}`)