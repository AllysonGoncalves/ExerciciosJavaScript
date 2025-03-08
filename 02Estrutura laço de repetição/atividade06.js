/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 06.

Leia 20 valores reais e calcule seu somatório utilizando a instrução do...while.*/

//do...while, o bloco de código sempre será executado pelo menos uma vez, e depois a condição será verificada.
let valores = 20     // Número de valores a serem somados
let soma = 0         // Inicializa a soma com 0
let contador = 1     // Controla quantos valores já foram somados

do {
    let valor = parseFloat(prompt("Digite um valor real:")); // Pede o valor ao usuário
    soma += valor   // Soma o valor à variável soma
    contador++      // Incrementa o contador
} while(contador <= valores) // O loop vai continuar até o contador chegar a 20

console.log('A soma = ' + soma)  // Exibe o valor total da soma