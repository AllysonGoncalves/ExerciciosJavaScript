/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 (Exercícios Básicos)
Ex: 20.
Crie um array de objetos pessoas, onde cada objeto tem nome e idade. Filtre as pessoas com mais de 18 anos e crie um novo array apenas com essas pessoas.
*/
const pessoas = [
    { nome: 'Ana', idade: 20 },
    { nome: 'João', idade: 15 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Carlos', idade: 17 }
  ];
  
  const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade > 18);
  console.log(maioresDeIdade);  // [{ nome: 'Ana', idade: 20 }, { nome: 'Maria', idade: 30 }]