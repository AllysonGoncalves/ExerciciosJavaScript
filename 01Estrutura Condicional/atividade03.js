/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 03. 

 Faça um programa para converter um certo valor em reais para dólares (ver cotação do
dia).*/

let valorReal = Number(prompt('Informe o valor em reais: '))
let cotacaoRealDolar = 0.18 

let valorDolar = valorReal * cotacaoRealDolar

alert('Valor em dolar: U$$ ' + valorDolar.toFixed(2).replace('.', ','))




// Entrada de dados
/*let valorEmReais = parseFloat(prompt('Informe o valor em reais'))
let valorDoRealParaDolar = 0.18
// Cálculo da conversão
let valorEmDolar = valorEmReais * valorDoRealParaDolar
// Exibição do resultado
let valorEmDolarFormatado = 'US$ ' + valorEmDolar.toFixed(2).replace('.', ',')

alert('Valor em dolar: ' + valorEmDolarFormatado)
console.log('Valor em dolar: ' + valorEmDolarFormatado)*/


/*let valorEmReais = 100
let valorDoRealParaDolar = 0.18

let valorEmDolar = valorEmReais * valorDoRealParaDolar

let valorEmDolarFormatado = 'US$ ' + valorEmDolar.toFixed(2).replace('.', ',')

alert('Valor em dólar: ' + valorEmDolarFormatado)
console.log('Valor em dólar: ' + valorEmDolarFormatado)*/