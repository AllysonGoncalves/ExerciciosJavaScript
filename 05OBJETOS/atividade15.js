/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 (Exercícios intermediario)
Ex: 15.

Crie um objeto livro com as propriedades titulo, autor, ano, e genero.
Utilize a desestruturação para acessar e imprimir o título e o autor do livro.
*/
const livro = {
    titulo: '1984',
    autor: 'George Orwell',
    ano: 1949,
    genero: 'Distopia'
  };
  
  const { titulo, autor } = livro;
  console.log(`Título: ${titulo}, Autor: ${autor}`);