/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 ( Exercícios Intermediários)
Ex: 07.
Escreva uma função chamada contador que retorne outra função. A função retornada deve incrementar e retornar um valor a cada vez que for chamada, mantendo o valor de contagem entre as chamadas.
*/
function contador() {
    let count = 0;  // Variável para armazenar o valor da contagem
    
    return function() {
      count++;  // Incrementa a contagem
      return count;  // Retorna o valor atual da contagem
    };
  }
  
  // Testando a função
  const contar = contador();
  console.log(contar()); // Retorna 1
  console.log(contar()); // Retorna 2
  console.log(contar()); // Retorna 3