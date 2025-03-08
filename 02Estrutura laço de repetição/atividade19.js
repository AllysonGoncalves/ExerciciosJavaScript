/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 19.

Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:
Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior. Faça um programa que determine o salário atual desse funcionário. Após concluir isto, altere o programa permitindo que o usuário digite o salário inicial do funcionário.
*/
// Definindo o salário inicial e o ano de contratação
let salario = 1000
let anoContratacao = 1995
let anoAtual = 2025 // Você pode alterar o ano atual conforme necessário

// Percentual de aumento para o primeiro ano (1996)
let percentualAumento = 1.5 // 1.5%

// Calculando o aumento de salário a partir de 1996 até o ano atual
for (let ano = anoContratacao + 1; ano <= anoAtual; ano++) {
    salario += salario * (percentualAumento / 100)
    percentualAumento *= 2; // O aumento é o dobro do percentual do ano anterior
}

// Exibindo o salário final
console.log("Salário final em " + anoAtual + ": R$ " + salario.toFixed(2))

// Agora, vamos permitir que o usuário digite o salário inicial
let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"))
salario = salarioInicial
percentualAumento = 1.5

for (let ano = anoContratacao + 1; ano <= anoAtual; ano++) {
    salario += salario * (percentualAumento / 100)
    percentualAumento *= 2
}

console.log("Salário final com salário inicial de R$ " + salarioInicial + " em " + anoAtual + ": R$ " + salario.toFixed(2))