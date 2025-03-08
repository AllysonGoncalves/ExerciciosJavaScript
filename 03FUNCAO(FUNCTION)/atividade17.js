/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 ( Exercícios Avançados)
Ex: 17.
Crie uma função maiorNumero(arr) que recebe um array de números e retorna o maior deles.
*/

//Essa função utiliza o método Math.max() com o operador de espalhamento (...) para retornar o maior número de um array arr. Ele passa os elementos do array como argumentos para o Math.max(), que então encontra o valor máximo.
function maiorNumero(arr) {
    return Math.max(...arr);  // Usa o spread operator para passar os elementos do array como argumentos para Math.max
  }
  
  // Testando a função
  console.log(maiorNumero([1, 5, 3, 9, 2]));  // Retorna 9
  console.log(maiorNumero([-1, -5, -3, -9, -2]));  // Retorna -1
  console.log(maiorNumero([100, 50, 200, 150]));  // Retorna 200
  console.log(maiorNumero([0]));  // Retorna 0 (único valor)

/*
Explicação:
A função usa o método Math.max() para encontrar o maior número.
O spread operator (...arr) é utilizado para passar todos os elementos do array como parâmetros individuais para Math.max().
O Math.max() retorna o maior valor entre os números passados como argumentos.
Essa solução é simples e muito eficiente para encontrar o maior número em um array de números.
*/