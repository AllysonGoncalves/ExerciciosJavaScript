/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 ( Exercícios Avançados)
Ex: 18.
Crie uma função gerarSenha(tamanho) que gera uma senha aleatória com letras e números.
*/

//Essa função gera uma senha de tamanho especificado pelo parâmetro tamanho, escolhendo aleatoriamente caracteres do conjunto que inclui letras maiúsculas, minúsculas e números.

function gerarSenha(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let senha = '';
    
    for (let i = 0; i < tamanho; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);  // Gera um índice aleatório
      senha += caracteres[randomIndex];  // Adiciona o caractere correspondente ao índice
    }
  
    return senha;
  }
  
  // Testando a função
  console.log(gerarSenha(8));  // Exemplo de senha: 'A1b2C3d4'
  console.log(gerarSenha(12)); // Exemplo de senha: 'w9L8eY2kP5cD'
  console.log(gerarSenha(6));  // Exemplo de senha: '3dF1p6'

/*Explicação:
  A constante caracteres contém todos os caracteres possíveis que podem fazer parte da senha (letras maiúsculas, minúsculas e números).
  A função cria uma senha vazia e, dentro de um loop que vai até o tamanho desejado, ela escolhe aleatoriamente um caractere da string caracteres usando o índice aleatório gerado com Math.random().
  A senha gerada é retornada no final.
  Essa função é útil para gerar senhas seguras e aleatórias de qualquer tamanho especificado.*/
