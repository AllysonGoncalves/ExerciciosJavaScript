/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 10.

Faça um programa que leia 5 números e informe o maior número.
*/

let maiorNumero = Number(prompt("Digite um número:"))

for (let i = 1; i < 5; i++) { // Começa do 1 porque já pegamos o primeiro número
    let num = Number(prompt("Digite um número:"))

    if (num > maiorNumero) {
        maiorNumero = num // Atualiza se o número for maior
    }
}

alert(`O maior número é: ${maiorNumero}`)
console.log(`O maior número é: ${maiorNumero}`)


// OU 

/*let num1 = Number(prompt('Digite um número:'))
let num2 = Number(prompt('Digite um número:'))
let num3 = Number(prompt('Digite um número:'))
let num4 = Number(prompt('Digite um número:'))
let num5 = Number(prompt('Digite um número:'))

// Uso do Math.max() para encontrar o maior número de forma simples e eficiente
// Encontrar o maior número usando Math.max()
let maiorNumero = Math.max(num1, num2, num3, num4, num5)

alert(`O maior número é: ${maiorNumero}`)
console.log(`O maior número é: ${maiorNumero}`)*/