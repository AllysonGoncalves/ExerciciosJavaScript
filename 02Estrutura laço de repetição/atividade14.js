/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 14.

Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.
*/
let numero = parseInt(prompt("Digite um número inteiro:"))

let primo = true;

if (numero <= 1) {
    primo = false; // Números menores ou iguais a 1 não são primos
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false; // Se o número for divisível por outro número que não seja 1 ou ele mesmo, não é primo
            break;
        }
    }
}

if (primo) {
    alert(numero + " é um número primo.");
} else {
    alert(numero + " não é um número primo.");
}