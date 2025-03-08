/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 30.

Este exemplo encontra o maior número que é divisível por 3 e menor que n.*/

let n = 25;  // Pode ser qualquer valor
let num = n - 1;  // Começamos com o número menor que n

while (num >= 3) {
    if (num % 3 === 0) {
        console.log("O maior número divisível por 3 e menor que", n, "é", num);
        break;  // Sai do laço, pois já encontramos o maior número divisível por 3
    }
    num--;
}