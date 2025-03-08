/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ARRAYS
Exercícios Avançados
Ex: 17.
Crie uma matriz (array bidimensional) [[1, 2], [3, 4], [5, 6]] e exiba o segundo número da segunda linha.
*/
let matriz = [[1, 2], [3, 4], [5, 6]];

// Exibe o segundo número da segunda linha
let numero = matriz[1][1];

console.log(numero); // Saída: 4

/*
Explicação:
Criamos uma matriz matriz com três linhas e duas colunas: [[1, 2], [3, 4], [5, 6]].
Usamos matriz[1][1] para acessar o segundo número da segunda linha:
matriz[1] acessa a segunda linha ([3, 4]).
matriz[1][1] acessa o segundo número dessa linha (4).
Exibimos o número 4 no console.
Saída esperada: 4

*/