/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 (Exercícios Básicos)
Ex: 18.
Crie um objeto empresa com informações de filiais (objeto aninhado). Escreva uma função que verifica se uma filial com um determinado nome existe.
*/
const empresa = {
    nome: 'Tech Solutions',
    filiais: {
      'São Paulo': { funcionarios: 150 },
      'Rio de Janeiro': { funcionarios: 200 },
      'Belo Horizonte': { funcionarios: 50 }
    }
  };
  
  function verificarFilial(nome) {
    return nome in empresa.filiais ? `Filial ${nome} existe!` : `Filial ${nome} não encontrada.`;
  }
  
  console.log(verificarFilial('São Paulo'));  // Filial São Paulo existe!
  console.log(verificarFilial('Curitiba'));   // Filial Curitiba não encontrada.