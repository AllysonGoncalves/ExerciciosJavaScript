/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 ( Exercícios Avançados)
Ex: 19.
Crie uma função contarOcorrencias(texto, letra) que recebe uma string e uma letra, e retorna quantas vezes a letra aparece na string.
*/

//Essa função percorre a string texto e, sempre que encontra a letra correspondente, incrementa a variável count. No final, retorna o número de ocorrências da letra na string.

function contarOcorrencias(texto, letra) {
    let contador = 0;
    
    // Loop através de cada caractere da string
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === letra) {
        contador++;  // Incrementa o contador quando encontra a letra
      }
    }
  
    return contador;  // Retorna o número de ocorrências
  }
  
  // Testando a função
  console.log(contarOcorrencias("banana", "a"));  // Retorna 3
  console.log(contarOcorrencias("abacaxi", "x")); // Retorna 1
  console.log(contarOcorrencias("morango", "o")); // Retorna 2
  console.log(contarOcorrencias("laranja", "z")); // Retorna 0
  
  /*Explicação:
  A função contarOcorrencias percorre a string texto caractere por caractere.
  Sempre que encontra a letra especificada (letra), o contador é incrementado.
  Ao final, a função retorna o valor do contador, que indica o número de ocorrências da letra na string.
  Essa função é útil para contar quantas vezes um determinado caractere aparece em uma string.*/
  
  
  
  
  
  
  
  