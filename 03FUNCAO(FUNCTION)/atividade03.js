/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 (Exercícios Básicos)
Ex: 03.
Crie uma função chamada ehPar(numero) que receba um número e retorne true se for par e false se for ímpar.
Essa função verifica se o número é divisível por 2 (ou seja, se o resto da divisão por 2 é zero). Se for, retorna true, indicando que é par; caso contrário, retorna false, indicando que é ímpar.*/


function ehPar(numero) {
  return numero % 2 === 0  // Retorna true se o número for divisível por 2 (par), caso contrário, false (ímpar)
}

// Testando a função
console.log(ehPar(4)) // Retorna true (4 é par)
console.log(ehPar(7)) // Retorna false (7 é ímpar)
console.log(ehPar(0)) // Retorna true (0 é par)
console.log(ehPar(13)) // Retorna false (13 é ímpar)



/*Explicação:
A função ehPar utiliza o operador módulo % para verificar o resto da divisão do número por 2.
Se o resto for 0, isso significa que o número é divisível por 2 e, portanto, é par. Nesse caso, a função retorna true.
Se o resto for diferente de 0, o número é ímpar, e a função retorna false.
Essa é uma maneira simples e eficiente de verificar se um número é par ou ímpar.*/

function ePar(numero){
  return numero % 2 === 0
}
console.log(ehPar(71))
console.log(ehPar(6))
console.log(ehPar(25))
console.log(ehPar(9))
console.log(ehPar(4))
console.log(ehPar(7))
console.log(ehPar(0))
