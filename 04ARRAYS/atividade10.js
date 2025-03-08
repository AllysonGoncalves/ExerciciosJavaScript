/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ARRAYS
Exercícios Intermediários
Ex: 10.
Transforme um array de números [1, 2, 3, 4] em um novo array com o dobro dos valores usando map().
*/
let numeros = [1, 2, 3, 4];

// Cria um novo array com o dobro de cada valor
let dobrados = numeros.map(num => num * 2);

console.log(dobrados); // Saída: [2, 4, 6, 8]

/*
Criamos o array numeros com os valores [1, 2, 3, 4].
Usamos map(num => num * 2) para criar um novo array onde cada número é multiplicado por 2.
Exibimos o novo array dobrados no console.
Saída esperada: [2, 4, 6, 8]

*/