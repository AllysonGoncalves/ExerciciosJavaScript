/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 08. 

Faça um programa que leia o salário de um funcionário e o percentual de aumento,
calcule e mostre o valor do aumento e o novo salário*/

//parseFloat para converter uma string em um número de ponto flutuante, ou seja, um número decimal. 
//Leitura do salário e percentual de aumento

// Entrada de dados
const salario = parseFloat(prompt("Digite o salário do funcionário: "))
const percentual = parseFloat(prompt("Digite o percentual de aumento (%): "))

// Cálculo do valor do aumento e do novo salário
let valorDoAumento = (salario * percentual) / 100
let novoSalario = salario + valorDoAumento

// Exibição do resultado
alert(`O valor do aumento R$ ${valorDoAumento.toFixed(2).replace('.',',')} e o novo salario R$ ${novoSalario.toFixed(2).replace('.',',')}`)


/*const aumento = (salario * percentual) / 100
const novoSalario = salario + aumento

//.toFixed(2).replace('.', ',') formata um número com duas casas decimais
//replace('.', ',') substitui o ponto por vírgula
alert(`Valor do aumento: R$ ${aumento.toFixed(2).replace('.', ',')}`)
alert(`Novo salário: R$ ${novoSalario.toFixed(2).replace('.', ',')}`)
console.log(`Valor do aumento: R$ ${aumento.toFixed(2).replace('.', ',')}`)
console.log(`Novo salário: R$ ${novoSalario.toFixed(2).replace('.', ',')}`)*/










