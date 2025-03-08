/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 
Ex: 04.
Crie um objeto chamado estudante com as propriedades nome, nota1 e nota2. Use um laço for...in para listar todas as propriedades e valores desse objeto.
*/
const estudante = {
    nome: 'Maria',
    nota1: 8,
    nota2: 9
  };
  
  for (let chave in estudante) {
    console.log(`${chave}: ${estudante[chave]}`);
  }

  /*O for...in é uma forma de iterar (ou percorrer) as chaves de um objeto. No caso do seu código, ele está percorrendo cada chave do objeto estudante (ou seja, nome, nota1, e nota2) e imprimindo a chave e o valor correspondente.*/