/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 
Ex: 07.
Crie um objeto produto com as propriedades nome, preco e categoria.
Acesse e imprima o preço do produto.
Alterar o nome do produto para "Notebook" e a categoria para "Eletrônicos".
*/
const produto = {
    nome: 'Celular',
    preco: 1200,
    categoria: 'Tecnologia'
  };
  
  console.log(produto.preco);  // 1200
  produto.nome = 'Notebook';
  produto.categoria = 'Eletrônicos';
  console.log(produto);