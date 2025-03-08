/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 ( Exercícios Intermediários)
Ex: 06.
Crie uma função fatorial(n) que retorne o fatorial de um número n.Essa função calcula o fatorial de um número n. Se n for 0 ou 1, retorna 1 (pois o fatorial de 0 e 1 é 1). Para outros valores de n, ela utiliza um laço para multiplicar todos os números de 1 até n e retorna o resultado.
*/
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}
  // Testando a função
  console.log(fatorial(5));  // Retorna 120 (5 * 4 * 3 * 2 * 1)
  console.log(fatorial(0));  // Retorna 1 (fatorial de 0 é 1)
  console.log(fatorial(7));  // Retorna 5040 (7 * 6 * 5 * 4 * 3 * 2 * 1)

//OU ||

/*function fatorial(n) {
    if (n === 0 || n === 1) {
      return 1;  // Caso base: fatorial de 0 ou 1 é 1
    }
    return n * fatorial(n - 1);  // Chamada recursiva para calcular o fatorial
  }
  
  // Testando a função
  console.log(fatorial(5));  // Retorna 120 (5 * 4 * 3 * 2 * 1)
  console.log(fatorial(0));  // Retorna 1 (fatorial de 0 é 1)
  console.log(fatorial(7));  // Retorna 5040 (7 * 6 * 5 * 4 * 3 * 2 * 1)
  Explicação:
  O fatorial de um número n é o produto de todos os inteiros positivos de 1 até n. Ele é representado por n!.
  O caso base da recursão é quando n é 0 ou 1, pois o fatorial de 0 e 1 é 1.
  A função retorna n * fatorial(n - 1) para calcular o fatorial de números maiores que 1. Ou seja, ela chama a si mesma para calcular o fatorial de n-1 até alcançar o caso base.
  Essa abordagem recursiva é uma forma clássica de calcular o fatorial.*/
