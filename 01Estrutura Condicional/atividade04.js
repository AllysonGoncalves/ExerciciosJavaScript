/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 04. 

 Faça um programa que leia um saldo e imprimir o saldo com reajuste de 1%. */

 // Entrada de dados
 let saldo = parseFloat(prompt('Informe seu saldo:'))
 //let reajuste = saldo + (saldo * 0.01)// pode colocar aqui tbm ou depois do else

if (isNaN(saldo)) {
     alert('Valor inválido! Por favor, informe um número.')
}else{
     let reajuste = saldo + (saldo * 0.01)
     alert(`O saldo com o reajuste foi: R$ ${reajuste.toFixed(2).replace('.', ',')}`)
     console.log(`O saldo com o reajuste foi: R$ ${reajuste.toFixed(2).replace('.', ',')}`)
 }

 //IsNaN > Se o usuário inserir algo que não seja um número (como letras ou um campo vazio).
//replace('.', ',') substitui o ponto por vírgula


 // OU ||


 //USANDO O WHILE

 /*let saldo

 while (true) {//enquanto for verdadeiro
     saldo = parseFloat(prompt('Informe seu saldo:'))
 
     if (!isNaN(saldo) && saldo >= 0) {
         break
     } else {
         alert('Valor inválido! Por favor, informe um número válido.')
   }
 }
 
 let reajuste = saldo + (saldo * 0.01)
 
 alert(`O saldo com o reajuste foi: R$ ${reajuste.toFixed(2).replace('.', ',')}`)
 console.log(`O saldo com o reajuste foi: R$ ${reajuste.toFixed(2).replace('.', ',')}`)*/

 /*
A razão para você precisar usar !isNaN(saldo) e não apenas isNaN(saldo) está na forma como a função isNaN() funciona.

isNaN(saldo): A função isNaN() retorna true se o valor de saldo não for um número válido (ou seja, se for NaN, undefined, ou um valor que não pode ser convertido para número). Então, se você usar isNaN(saldo) diretamente, o código estará verificando se saldo é inválido, e retornará true quando saldo for não numérico.

!isNaN(saldo): Quando você coloca ! antes de isNaN(saldo), está invertendo o valor retornado pela função isNaN(). Ou seja, a condição !isNaN(saldo) vai retornar true quando saldo for um número válido e false quando saldo não for um número.

Portanto, a explicação para usar !isNaN(saldo) é garantir que o valor de saldo seja um número válido. Se você usasse apenas isNaN(saldo), a condição ficaria true para valores inválidos, o que não é o comportamento que você quer. Por exemplo:

Se você usar !isNaN(saldo):

if (!isNaN(saldo) && saldo >= 0) {
  // Executa a ação se saldo for um número válido e maior ou igual a 0
}
Se saldo = 100, !isNaN(100) retorna true e a condição 100 >= 0 também é true, então o código dentro do if será executado.
Se saldo = "abc", !isNaN("abc") retorna false, então o código não entra no if, já que o valor de saldo não é um número válido.
 */




//USANDO FUNÇÃO
 /*function reajustarSaldo(saldo) {
    return saldo * 1.01; // Aplica o reajuste de 1%
}
// Exemplo de uso:
let saldoAtual = parseFloat(prompt("Digite o saldo:")) // Lê o saldo do usuário
let saldoReajustado = reajustarSaldo(saldoAtual)

console.log(`Saldo após reajuste de 1%: R$${saldoReajustado.toFixed(2)}`)
alert(`Saldo após reajuste de 1%: R$${saldoReajustado.toFixed(2)}`)*/