/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ARRAYS
Exercícios Intermediários
Ex: 07.
 Ordene o array [10, 5, 8, 1, 7] em ordem crescente.
*/
let numeros = [10, 5, 8, 1, 7];

numeros.sort((a, b) => a - b); // Ordena em ordem crescente

console.log(numeros); // Saída: [1, 5, 7, 8, 10]

/*
Explicação:
Criamos um array numeros com os valores [10, 5, 8, 1, 7].
Usamos sort((a, b) => a - b) para ordenar os números de forma crescente:
a - b garante que os números sejam ordenados corretamente (caso contrário, sort() ordena como strings).
Exibimos o array ordenado no console.
Saída esperada: [1, 5, 7, 8, 10]


Caso queira ordenar de forma decrescente, basta inverter:

numeros.sort((a, b) => b - a); // Ordena em ordem decrescente
console.log(numeros); // Saída: [10, 8, 7, 5, 1]

*/