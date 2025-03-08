/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 ( Exercícios Avançados)
Ex: 20.
Crie uma função ordenarArray(arr) que recebe um array de números e retorna o array ordenado em ordem crescente.
*/

//Essa função usa o método sort() para ordenar o array arr. O parâmetro da função de comparação (a, b) => a - b garante que o array seja ordenado em ordem crescente.

function ordenarArray(arr) {
    return arr.sort((a, b) => a - b);  // Usa a função de comparação para ordenar em ordem crescente
  }
  
  // Testando a função
  console.log(ordenarArray([5, 2, 9, 1, 5, 6]));  // Retorna [1, 2, 5, 5, 6, 9]
  console.log(ordenarArray([3, 10, 7, 1, 8]));    // Retorna [1, 3, 7, 8, 10]
  console.log(ordenarArray([12, 4, 18, 7, 3]));   // Retorna [3, 4, 7, 12, 18]

  /*Explicação:
  A função sort é usada para ordenar o array.
  A função de comparação (a, b) => a - b é fornecida para garantir que a ordenação seja feita em ordem crescente. Se o resultado da comparação for negativo, o elemento a será colocado antes de b. Caso contrário, b será colocado antes de a.
  Essa abordagem é eficaz para ordenar arrays numéricos em ordem crescente.*/