/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 ( Exercícios Avançados)
Ex: 16.
Crie uma função contarPalavras(frase) que receba uma string e retorne o número de palavras.
*/
function contarPalavras(frase) {
    // Divide a frase em palavras usando o espaço como separador e retorna o tamanho do array resultante
    return frase.split(' ').filter(function(palavra) {
      return palavra.length > 0;  // Filtra palavras vazias (em caso de múltiplos espaços consecutivos)
    }).length;
  }
  
  // Testando a função
  console.log(contarPalavras("Olá, como você está?"));  // Retorna 4
  console.log(contarPalavras("Este é um exemplo!"));  // Retorna 4
  console.log(contarPalavras("   "));  // Retorna 0 (não há palavras)
  console.log(contarPalavras("Palavra1 Palavra2 Palavra3"));  // Retorna 3
  
  /*Explicação:
  A função split(' ') divide a string em um array de palavras usando o espaço como separador.
  Em seguida, filter() é usado para remover palavras vazias, que podem aparecer caso haja múltiplos espaços consecutivos na string.
  A função retorna o comprimento do array resultante, que corresponde ao número de palavras na frase.
  Essa função é simples e eficaz para contar o número de palavras em uma string.*/