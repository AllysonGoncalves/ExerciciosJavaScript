/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ARRAYS
Exercícios Avançados
Ex: 16.
Some todos os elementos do array [3, 5, 7, 9] usando reduce().
*/
let numeros = [3, 5, 7, 9];

// Soma todos os elementos do array
let soma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(soma); // Saída: 24

/*
Explicação:
Criamos o array numeros com os valores [3, 5, 7, 9].
Usamos reduce() para somar todos os elementos:
O acumulador começa com o valor 0 (valor inicial).
Em cada iteração, o acumulador vai acumulando o valor de cada elemento do array.
Exibimos o valor total da soma no console.
Saída esperada: 24 (porque 3 + 5 + 7 + 9 = 24).

*/