/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 20. 

Faça um script que receba a altura de um degrau de uma escada e a altura que um pedreiro deseja alcançar utilizando essa escada, calcule e mostre quantos degraus ele deverá subir para atingir seu objetivo, os valores fornecidos devem ser em metros. 
*/
let alturaDegrau = Number(prompt('Informe a altura de um degrau da escada (em metros):'))
let alturaDesejada = Number(prompt('Informe a altura que deseja alcançar (em metros):'))

let qtdDegraus = alturaDesejada / alturaDegrau

alert(`O pedreiro vai subir ${qtdDegraus.toFixed(2)} degraus`)