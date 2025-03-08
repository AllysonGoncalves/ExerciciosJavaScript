/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 
Ex: 12.
Crie um array de objetos chamado alunos, onde cada objeto tem as propriedades nome e notaFinal.
Ordene esse array pelo valor de notaFinal em ordem crescente.
Imprima os alunos ordenados.
*/
const alunos = [
    { nome: 'Carlos', notaFinal: 8 },
    { nome: 'Maria', notaFinal: 9 },
    { nome: 'João', notaFinal: 7 }
  ];
  
  alunos.sort((a, b) => a.notaFinal - b.notaFinal);
  console.log(alunos);
