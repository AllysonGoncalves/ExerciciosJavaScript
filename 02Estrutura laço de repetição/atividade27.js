/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 27.

Escreva um código que verifique se um número é primo.*/

let num = Number(prompt('Digite um númrero:'))
let i = 2//contador, i é usada para controlar o laço de repetição (o while).
let isPrimo = true//verdadeiro

while (i <= Math.sqrt(num)) {
    if (num % i === 0) {//Verifica se num é divisível por i sem deixar resto.
        isPrimo = false//Marca o número como não primo, caso encontre um divisor.
        break//Encerra o laço, pois já sabemos que o número não é primo e não precisamos continuar
    }
    i++
}

/*
num % i === 0: Verifica se num é divisível por i sem deixar resto.
isPrimo = false;: Marca o número como não primo, caso encontre um divisor.
break;: Encerra o laço, pois já sabemos que o número não é primo e não precisamos continuar*/


//Math.sqrt calcula a raiz quadrada