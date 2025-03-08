/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ARRAYS
Exercícios Intermediários
Ex: 09.
Crie um novo array contendo apenas os números pares de [4, 7, 9, 2, 6, 1, 10] usando filter().
*/
let numeros = [4, 7, 9, 2, 6, 1, 10];

// Filtra os números pares
let pares = numeros.filter(num => num % 2 === 0);

console.log(pares); // Saída: [4, 2, 6, 10]

/*
Explicação:
Criamos o array numeros com os valores [4, 7, 9, 2, 6, 1, 10].
Usamos filter(num => num % 2 === 0) para criar um novo array contendo apenas os números pares:
O operador % verifica se o número é divisível por 2 (resto igual a 0).
Exibimos o array pares no console.
Saída esperada: [4, 2, 6, 10]

*/