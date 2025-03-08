/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 
Ex: 08.
Crie um objeto livro com as propriedades titulo, autor, ano, e genero.
Conte quantas propriedades existem no objeto e imprima esse número.*/

const livro = {
  titulo: 'Dom Casmurro',
  autor: 'Machado de Assis',
  ano: 1899,
  genero: 'Realismo'
};

console.log(Object.keys(livro).length);  // 4

