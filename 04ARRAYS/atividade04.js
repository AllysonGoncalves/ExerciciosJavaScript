/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ARRAYS 
(Exercícios Básicos)
Ex: 04.
Encontre o índice do número 7 em um array [3, 7, 2, 9, 1] usando indexOf().
*/
let numeros = [3, 7, 2, 9, 1];

let indice = numeros.indexOf(7); // Encontra o índice do número 7

console.log(indice); // Saída: 1

/*Explicação:
Criamos um array numeros com os valores [3, 7, 2, 9, 1].
Usamos indexOf(7) para encontrar a posição do número 7 no array.
Exibimos o índice encontrado no console.
✅ Saída esperada: 1 (porque 7 está na segunda posição do array, que tem índice 1).

Se o número não existir no array, indexOf() retornará -1.*/
