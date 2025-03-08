/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 23. 

Chico tem 1,70m e cresce 2 centímetros por ano, enquanto Juca tem 1,10m e cresce 3 centímetros
por ano. Construir um programa que calcule e imprima quantos anos serão necessários para que
Juca seja maior que Chico (Utilize a estrutura While).
*/
// Alturas iniciais
let alturaChico = 1.70
let alturaJuca = 1.10

// Taxas de crescimento
const crescimentoChico = 0.02
const crescimentoJuca = 0.03

let anos = 0//A variável anos é usada para contar quantos anos serão necessários até que Juca seja mais alto que Chico.

// Loop para calcular quantos anos serão necessários
while(alturaJuca <= alturaChico) {
    alturaChico += crescimentoChico
    alturaJuca += crescimentoJuca
    anos++//O contador anos é incrementado (anos++), pois um ano passou.
}
console.log(`Serão necessários ${anos} anos para que Juca seja maior que Chico.`)


/*
Quando o loop para:

O loop só termina quando alturaJuca for maior que alturaChico.
O valor final de anos armazenará o total de anos necessários para que isso aconteça.
Se let anos = 0 não fosse declarado antes do loop, a variável anos não existiria no escopo do loop e causaria um erro.
Se anos começasse com outro valor, o resultado final estaria incorreto.
*/