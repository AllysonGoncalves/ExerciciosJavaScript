/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 04.

Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/

let populacaoA = 80000
let taxaA = 0.03
let populacaoB = 200000
let taxaB = 0.015
let anos = 0// contagem de 1 em 1

while (populacaoA <= populacaoB){
    populacaoA += populacaoA * taxaA// populacaoA = populacaoA + (populacaoA * taxaA)
    populacaoB += populacaoB * taxaB// populacaoB = populacaoB + (populacaoB * taxaB)
    anos++//anos = anos + 1. Isso significa que estamos adicionando 1 ao número de anos a cada vez que o loop roda. 
}
console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`)
