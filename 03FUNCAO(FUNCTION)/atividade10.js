/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 ( Exercícios Intermediários)
Ex: 10.
Implemente sua própria versão da função bind. A função bind deve retornar uma nova função que, quando chamada, tem o seu this vinculado ao objeto fornecido.
*/
const pessoa = {
    nome: 'João',
    saudacao: function() {
      return `Olá, ${this.nome}`;
    }
  };
  
  const saudacaoJoao = pessoa.saudacao.bind(pessoa);
  console.log(saudacaoJoao());  // Retorna "Olá, João"