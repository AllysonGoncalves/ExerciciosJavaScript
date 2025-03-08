/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ARRAYS
Exercícios Intermediários

Ex: 08.
Remova o número do meio do array [10, 20, 30, 40, 50] usando splice().
*/
let numeros = [10, 20, 30, 40, 50];

// Remove o número do meio (índice 2, que é o 30)
numeros.splice(2, 1);

console.log(numeros); // Saída: [10, 20, 40, 50]

/*
Explicação:
Criamos um array numeros com os valores [10, 20, 30, 40, 50].
Usamos splice(2, 1) para remover 1 elemento no índice 2 (o número 30).
O primeiro argumento 2 indica o índice onde começaremos a remover.
O segundo argumento 1 indica quantos elementos devem ser removidos.
Exibimos o array atualizado no console.
Saída esperada: [10, 20, 40, 50]

*/