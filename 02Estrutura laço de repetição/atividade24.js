/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 24.

Escreva um código que calcule o fatorial de um número n.*/

let n = 5// ou qualquer valor
let fatorial = 1
let i = 1

while (i <= n) {
    fatorial *= i
    i++
}

console.log("O fatorial de", n, "é", fatorial)//("O fatorial de"+ n + "é" + fatorial)