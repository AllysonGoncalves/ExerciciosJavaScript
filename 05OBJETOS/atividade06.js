/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 
Ex: 06.
Crie um objeto aluno e use as funções Object.keys(), Object.values() e Object.entries() para listar as chaves, os valores e as entradas (pares chave-valor) do objeto.
*/
const aluno = {
    nome: 'Carlos',
    idade: 22,
    curso: 'Engenharia'
  };
  
  console.log(Object.keys(aluno));  // ['nome', 'idade', 'curso']
  console.log(Object.values(aluno));  // ['Carlos', 22, 'Engenharia']
  console.log(Object.entries(aluno));  // [['nome', 'Carlos'], ['idade', 22], ['curso', 'Engenharia']]