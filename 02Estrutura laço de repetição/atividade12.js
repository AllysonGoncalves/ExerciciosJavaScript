/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 12.

Faça um programa que imprima na tela apenas os números ímpares entre 1 e 100.
*/

for (let i = 2; i <= 100; i++) {  // Percorre todos os números de 2 a 50
    let isPrime = true;           // Assume que o número é primo inicialmente
    for (let j = 2; j < i; j++) { // Verifica se algum número de 2 até i-1 divide i
        if (i % j === 0) {        // Se o resto da divisão for 0, i não é primo
            isPrime = false;      // Marca o número como não primo
            break;                // Para de verificar, pois já sabemos que não é primo
        }
    }
    if (isPrime) {                // Se não foi marcado como não primo, é primo
        console.log(i);            // Exibe o número primo
    }
}
