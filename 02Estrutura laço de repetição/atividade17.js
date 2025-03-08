/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 17.

(Número perfeito: a soma de seus divisores (exceto ele mesmo) é igual ao próprio número. Exemplo: 6 → 1 + 2 + 3 = 6) */

let numero = Number(prompt("Digite um número:"))
let soma = 0
let i = 1

while (i < numero) {
  if (numero % i === 0) {
    soma += i
  }
  i++
}
console.log(numero, soma === numero ? "é um número perfeito" : "não é um número perfeito")