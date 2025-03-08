/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 (Exercícios Básicos)
Ex: 05.
Crie uma função chamada media(n1, n2, n3) que recebe três números e retorna a média deles.
Essa função recebe três números como parâmetros e retorna a média aritmética deles, que é a soma dos três números dividida por 3.
*/
function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
// Testando a função
console.log(media(10, 20, 30));  // Retorna 20
console.log(media(5, 7, 9));     // Retorna 7
console.log(media(0, 0, 0));     // Retorna 0

/*Explicação:
A função media recebe três parâmetros: n1, n2, e n3.
Ela soma os três números e divide o resultado por 3 para calcular a média.
O valor da média é retornado pela função.
Essa função é simples e direta, ideal para calcular a média de três números.
*/

function media(n1, n2, n3){
    return (n1 + n2 + n3) / 3
}
console.log(media(7, 8, 15))