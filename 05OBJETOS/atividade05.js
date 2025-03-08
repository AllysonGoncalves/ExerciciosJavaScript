/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS

Ex: 05.
Crie um objeto produto com as propriedades nome e preco. Verifique se o objeto tem a propriedade preco usando o operador in.
*/
const produto = {
    nome: 'Celular',
    preco: 1500
  };
  
  console.log('preco' in produto);  // true
  console.log('descricao' in produto);  // false