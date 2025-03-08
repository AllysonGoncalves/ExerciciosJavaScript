/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 ( Exercícios Intermediários)
Ex: 09.
Crie uma função chamada somarTodos que use o objeto arguments para somar todos os números passados como argumento. A função deve retornar a soma de todos os números fornecidos.
*/
function somarTodos() {
    let soma = 0;  // Variável para armazenar a soma
    
    // Iterando sobre o objeto arguments (que contém todos os argumentos passados)
    for (let i = 0; i < arguments.length; i++) {
      soma += arguments[i];  // Adiciona o valor de cada argumento à soma
    }
    return soma;  // Retorna o resultado da soma
  }
  // Testando a função
  console.log(somarTodos(1, 2, 3, 4, 5));  // Retorna 15
  console.log(somarTodos(10, 20));         // Retorna 30
  console.log(somarTodos(7, 8, 9));        // Retorna 24

  /*Explicação:
  O objeto arguments é uma coleção de todos os argumentos passados para a função, mas ele não é um array. Ele possui as propriedades length (tamanho) e os elementos numerados.
  A função somarTodos itera sobre o objeto arguments usando um for e soma cada número que foi passado como argumento.
  Ao final, ela retorna o valor da soma de todos os números fornecidos.
  Essa abordagem é útil para funções que não sabem quantos argumentos serão passados, como uma soma de números dinâmicos.*/