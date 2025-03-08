/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 05.

Leia 20 valores reais e calcule seu somatório utilizando a instrução while.*/

let valores = Number(prompt('Digite a quantidade de número para somar:'))// Número de valores a serem somados
let soma = 0         // Inicializa a soma com 0
let contador = 1     // Controla quantos valores já foram somados

while(contador <= valores) {   // Loop vai rodar enquanto o contador for menor ou igual a 20
    let valor = parseFloat(prompt("Digite um número inteiro:")) // Pede o valor ao usuário
    soma += valor   // Soma o valor à variável soma
    contador++      // Incrementa o contador para garantir que só somemos 20 valores
}

console.log('A soma = ' + soma)  // Exibe o valor total da soma

/*
Variável contador = 1:
Essa variável é usada para controlar o número de vezes que o loop while será executado.
Inicializamos ela com 1 porque estamos começando a contar a partir do primeiro valor a ser somado.
Em cada iteração do while, a variável contador será incrementada em 1, até atingir o número 20. Isso garante que o loop será executado exatamente 20 vezes.

Variável soma = 0:
A variável soma armazena o valor total da soma dos 20 números.
Começamos com 0 porque, antes de somar qualquer valor, o total precisa começar de 0.
A cada vez que o loop executa, o valor digitado pelo usuário é somado à variável soma.
*/


/*let soma = 0;

for (let i = 0; i < 20; i++) {
    let valor = parseFloat(prompt(`Digite o ${i + 1}º valor:`));
    soma += valor;  // Acumula a soma
}

alert(`O somatório dos 20 valores é: ${soma}`);*/


/*O for é mais eficiente quando sabemos o número exato de repetições.

O while é melhor quando não sabemos quantas vezes o loop será executado (exemplo: pedir entradas até o usuário digitar um valor válido).*/