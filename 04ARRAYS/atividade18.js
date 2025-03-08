/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ARRAYS
Exercícios Avançados
Ex: 18.
Combine dois arrays [1, 2, 3] e [4, 5, 6] em um só usando concat().
*/
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Combina os dois arrays
let combinado = array1.concat(array2);

console.log(combinado); // Saída: [1, 2, 3, 4, 5, 6]
/*
Explicação:
Criamos dois arrays: array1 = [1, 2, 3] e array2 = [4, 5, 6].
Usamos concat(array2) para combinar array1 com array2, criando um novo array contendo todos os elementos de ambos.
Exibimos o array combinado no console.
Saída esperada: [1, 2, 3, 4, 5, 6]

*/