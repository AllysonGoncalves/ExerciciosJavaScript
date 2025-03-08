/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 05. 

Faça um programa que leia o valor de um produto e imprimir o valor corrigido com o
reajuste de 33.33%. */

// Entrada de dados
let valorProduto = parseFloat(prompt('Informer o valor do produto:'))
let valorCorrigido = valorProduto + (valorProduto * 0.3333)

 //IsNaN > Se o usuário inserir algo que não seja um número (como letras ou um campo vazio).
if (isNaN(valorProduto)){
    alert('Invalido')
}else{
    alert('O valor corrigido R$ ' + valorCorrigido.toFixed(2).replace('.',','))
    console.log('O valor corrigido R$ ' + valor.toFixed(2).replace('.', ','))
}


//OU ||

/*let produto = Number(prompt('Informe o valor do produto'))
let valor = produto + (produto * 0.3333)

alert(`O valor corrigido de R$ ${produto.toFixed(2).replace('.', ',')} passa para R$ ${valor.toFixed(2).replace('.', ',')} `)
console.log('O valor corrigido R$ ' + valor.toFixed(2).replace('.', ','))*/