/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 
Ex: 11.
Crie um objeto produto com as propriedades nome, preco e quantidadeEmEstoque.
Crie uma função clonarProduto que recebe um objeto e retorna uma cópia dele (sem usar bibliotecas externas).
Imprima o objeto original e a cópia para verificar que são diferentes.
*/
const produto = {
    nome: 'Cadeira',
    preco: 150,
    quantidadeEmEstoque: 50
  };
  
  function clonarProduto(produto) {
    return { ...produto };  // Clonando o objeto
  }
  
  const produtoClone = clonarProduto(produto);
  console.log(produto);         // { nome: 'Cadeira', preco: 150, quantidadeEmEstoque: 50 }
  console.log(produtoClone);    // { nome: 'Cadeira', preco: 150, quantidadeEmEstoque: 50 }
  
  // Alterar o produto original para ver que o clone não foi afetado
  produto.preco = 200;
  console.log(produto);         // { nome: 'Cadeira', preco: 200, quantidadeEmEstoque: 50 }
  console.log(produtoClone);    // { nome: 'Cadeira', preco: 150, quantidadeEmEstoque: 50 }
  