/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 08.

Faça um algoritmo que leia um conjunto de 15 valores, um de cada vez,
acompanhados de um código 1 ou 2. O valor representa o número de cobaias(animais) utilizadas
em uma das 15 experiências feitas e os códigos 1 e 2 representam respectivamente
coelhos e ratos. Mostre no final, o total de cobaias(animais) utilizadas, o total de coelhos, total
de ratos, e o percentual de coelhos e ratos.
*/

//Essas linhas estão criando variáveis para contar o número de cobaias(animais), coelhos e ratos.
let totalCobaias = 0//Cria uma variável chamada totalCobaias e a inicializa com o valor 0. Ela vai contar o total de animais (coelhos + ratos).
let totalCoelhos = 0//Cria a variável totalCoelhos, que começa com 0, para contar apenas os coelhos.
let totalRatos = 0//Cria a variável totalRatos, que começa com 0, para contar apenas os ratos.

//for (inicialização; condição; incremento) {
    // Bloco de código a ser executado
//}
for (let i = 1; i <= 15; i++) {
    let valor = parseInt(prompt(`Digite o número de cobaias na experiência ${i}:`)); // Número de cobaias
    let codigo = parseInt(prompt(`Digite o código da experiência ${i}:\n 1 - coelhos\n 2 - ratos`)); // Código (1 ou 2)

    totalCobaias += valor; // Somando o total de cobaias

    if (codigo === 1) {
        totalCoelhos += valor; // Se o código for 1, somamos aos coelhos
    } else if (codigo === 2) {
        totalRatos += valor; // Se o código for 2, somamos aos ratos
    } else {
        console.log('Código inválido!'); // Se o código não for 1 nem 2
    }
}
// Calculando os percentuais
let percentualCoelhos = (totalCoelhos / totalCobaias) * 100;
let percentualRatos = (totalRatos / totalCobaias) * 100;

// Exibindo o resultado
console.log(`Total de cobaias: ${totalCobaias}`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Percentual de coelhos: ${percentualCoelhos.toFixed(2)}%`);
console.log(`Percentual de ratos: ${percentualRatos.toFixed(2)}%`);