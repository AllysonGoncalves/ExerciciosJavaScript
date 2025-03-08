/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 (Exercícios avançado)
Ex: 17.
Crie um objeto dados com várias propriedades. Use Object.entries() para transformar o objeto em um array de pares chave-valor e depois crie um novo array apenas com as chaves que possuem valores numéricos.
*/
const dados = {
    nome: 'Carlos',
    idade: 30,
    salario: 2500,
    cidade: 'Rio de Janeiro'
  };
  
  const chavesNumericas = Object.entries(dados)
    .filter(([chave, valor]) => typeof valor === 'number')
    .map(([chave, valor]) => chave);
  
  console.log(chavesNumericas);  // ['idade', 'salario']