/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 16. 

Faça um programa que leia dois números e efetua a adição. Se o valor somado for
maior que 20, este deverá ser apresentado somando-se a ele 8; se o valor somado for
menor ou igual a 20, este deverá ser apresentado subtraindo-se 5.*/

// Entrada de dados
let num01 = Number(prompt('Digite o primeiro numero'))
let num02 = Number(prompt('Digite o segundo numero'))

let somar = num01 + num02

if (isNaN(num01) || isNaN(num02)){
    alert('Invalido, digite apenas números')
}else if (somar > 20){
    somar += 8
    alert('RESULTADO = ' + somar)
    console.log(`O valor final após soma: ${soma}`)
}else if(somar < 20){
    somar += - 5
    alert('RESULTADO = ' + somar) 
    console.log(`O valor final após subtração: ${soma}`)  
}


/*let num1 = Number(prompt('Digite o primeiro numero'))
let num2 = Number(prompt('Digite o segundo numero'))

let soma = num1 + num2

if (isNaN(num1) || (isNaN(num2))){
    alert('Invalido, digite apenas números')
}else if(soma > 20){
    soma += 8 //soma = soma + 8
    alert(`O valor final após soma: ${soma}`)
    console.log(`O valor final após soma: ${soma}`)
}else{
    soma -= 5 //soma = soma - 5
    alert(`O valor final após subtração: ${soma}`)
    console.log(`O valor final após subtração: ${soma}`)  
}

//IsNaN > Se o usuário inserir algo que não seja um número (como letras ou um campo vazio).*/