/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 
Ex: 19.
Crie um objeto produto e use Object.freeze() para garantir que o objeto não possa ser modificado. Tente modificar uma propriedade e veja se isso tem efeito.
*/
const produto = Object.freeze({
    nome: 'Smartphone',
    preco: 1000
  });
  
  produto.preco = 1200;  // Não vai ter efeito
  console.log(produto.preco);  // 1000