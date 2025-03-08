/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ARRAYS
Exercícios Avançados
Ex: 19.
Escreva uma função que receba um array de strings e retorne um novo array apenas com as palavras que tenham mais de 5 letras.
*/
function palavrasLongas(arr) {
    return arr.filter(palavra => palavra.length > 5);
}

let palavras = ["abacaxi", "maçã", "banana", "pera", "laranja"];

let resultado = palavrasLongas(palavras);

console.log(resultado); // Saída: ['abacaxi', 'banana', 'laranja']

/*
Explicação:
Criamos a função palavrasLongas(arr) que usa o método filter() para filtrar o array de strings.
O filter() retorna um novo array contendo apenas as palavras cujo comprimento (usando palavra.length) é maior que 5.
Passamos um array de exemplos de palavras e exibimos o resultado no console.
Saída esperada: ['abacaxi', 'banana', 'laranja']
*/