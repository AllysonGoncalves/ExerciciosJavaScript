/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ARRAYS 
(Exercícios Básicos)
Ex: 05.
Verifique se o número 10 está presente no array [5, 3, 8, 10, 2] usando includes().
*/
let numeros = [5, 3, 8, 10, 2];

let existe = numeros.includes(10); // Verifica se o número 10 está no array

console.log(existe); // Saída: true

/*
Explicação:
Criamos um array numeros com os valores [5, 3, 8, 10, 2].
Usamos includes(10) para verificar se 10 está presente no array.
Exibimos o resultado com console.log(existe).
Saída esperada: true (pois 10 está no array).

Se o número não estivesse presente, includes() retornaria false.
*/