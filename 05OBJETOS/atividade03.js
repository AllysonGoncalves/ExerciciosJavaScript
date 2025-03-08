/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 
Ex: 03.
Crie um objeto chamado livro com as propriedades titulo, autor e anoDePublicacao. Adicione um método chamado descricao que retorna uma frase com essas informações.
*/
const livro = {
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    anoDePublicacao: 1937,
    descricao: function() {
      return `${this.titulo} de ${this.autor}, publicado em ${this.anoDePublicacao}.`;
    }
  };
  
  console.log(livro.descricao());