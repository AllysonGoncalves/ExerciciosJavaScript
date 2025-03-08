/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 14. 

Faça um programa que leia 3 números e “diga” qual é o maior deles.*/
 
// Entrada de dados
let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))
let num3 = Number(prompt('Digite o terceiro número'))

let maior

if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
  alert('Invalido, digite números')
}else if (num1 > num2 && num1 > num3){
    maior = num1
}else if (num2 > num3){
  maior = num2
}else{
  maior = num3
}
alert('O maior = ' + maior)


/*const num1 = parseFloat(prompt("Digite o primeiro número:"))
const num2 = parseFloat(prompt("Digite o segundo número:"))
const num3 = parseFloat(prompt("Digite o terceiro número:"))

let maior

if (num1 >= num2 && num1 >= num3) {
    maior = num1
} else if (num2 >= num1 && num2 >= num3) {
    maior = num2
} else {
    maior = num3
}

alert("O maior número é: " + maior)*/


 //OU ||


 //Faça um programa que leia 3 números e “diga” qual é o maior deles.

 /*const num1 = parseFloat(prompt("Digite o primeiro número:"))
 const num2 = parseFloat(prompt("Digite o segundo número:"))
 const num3 = parseFloat(prompt("Digite o terceiro número:"))

 //IsNaN > Se o usuário inserir algo que não seja um número (como letras ou um campo vazio).

 if (isNaN(num1) || (isNaN(num2) || (isNaN(num3)))){
   alert('Invalido, digite apenas numeros')
 }else if(num1 > num2 || num1 > num3){
   alert('O maior é o numero ' + num1)
 }else if (num2 > num1 || num2 > num3){
   alert('O maior é o numero ' + num2)
 }else{
   alert('O maior é o numero ' + num3)
 }*/


 //USANDO UMA FUNÇÃO

 /*function obterNumero(mensagem){//function: Define uma função chamada obterNumero.mensagem: Parâmetro que recebe o texto a ser exibido ao usuário na caixa de entrada.
   let numero//Declara a variável numero, que armazenará o valor digitado pelo usuário.
   do {
    numero = parseFloat(prompt(mensagem)); // Pede um número ao usuário e converte para número
  } while (isNaN(numero)); // Repete se o usuário digitar algo inválido
  return numero; // Retorna o número válido
}

const num1 = obterNumero("Digite o primeiro número:")
const num2 = obterNumero("Digite o segundo número:")
const num3 = obterNumero("Digite o terceiro número:")

let maior

if (num1 >= num2 && num1 >= num3) {
   maior = num1
} else if (num2 >= num1 && num2 >= num3) {
   maior = num2
} else {
   maior = num3
}

alert("O maior número é: " + maior)
console.log("O maior número é:", maior)*/

//OU


// Função para obter um número válido do usuário
/*function obterNumero(mensagem) {
  let numero;
  do {
      numero = parseFloat(prompt(mensagem)); // Pede um número ao usuário e converte para número
  } while (isNaN(numero)); // Repete se o usuário digitar algo inválido
  return numero; // Retorna o número válido
}

// Solicita os três números ao usuário
const num1 = obterNumero("Digite o primeiro número:");
const num2 = obterNumero("Digite o segundo número:");
const num3 = obterNumero("Digite o terceiro número:");

// Descobre o maior número
const maior = Math.max(num1, num2, num3);

// Exibe o resultado
alert("O maior número é: " + maior);
console.log("O maior número é:", maior);*/


//Uso da função Math.max()

//O JavaScript já tem uma função embutida que encontra o maior número, então não precisamos do if-else.
//Math.max(num1, num2, num3) retorna o maior valor entre os três números.