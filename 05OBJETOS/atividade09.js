/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 
Ex: 09.
Crie um objeto pessoa com as propriedades nome, idade, e cidade.
Adicione um método apresentar que retorna uma frase dizendo "Olá, meu nome é [nome], tenho [idade] anos e moro em [cidade]".
Chame o método e imprima o resultado.
*/
const pessoa = {
    nome: 'Ana',
    idade: 28,
    cidade: 'São Paulo',
    apresentar: function() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`;
    }
  };
  
  console.log(pessoa.apresentar());