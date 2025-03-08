/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 02. 

Faça um programa para converter um certo valor em dólar para reais (ver cotação do
dia).*/

// Entrada de dados
let valorDolar = Number(prompt('Informe o valor do dolar U$$'))
let cotacaoDolarReal = 5.70

// Cálculo da conversão
let valorReais = valorDolar * cotacaoDolarReal

// Exibição do resultado
alert('Valor em reais: R$ ' + valorReais.toFixed(2).replace('.', ','))





// Entrada de dados
/*var valorEmDolares = parseFloat(prompt('Informe o valor em dolar US$ :')) // Substitua este valor pelo valor em dólares que deseja converter
var cotacaoDolarParaReal = 5.70 // Cotação do dólar em reais

// Cálculo da conversão
var valorEmReais = valorEmDolares * cotacaoDolarParaReal

// Formatação do valor em reais para o formato de moeda brasileira
var valorEmReaisFormatado = 'R$ ' + valorEmReais.toFixed(2).replace('.', ',')
//.toFixed(2).replace('.', ',') formata um número com duas casas decimais
//replace('.', ',') substitui o ponto por vírgula

// Exibição do resultado
alert('Valor em reais: R$ ' + valorEmReaisFormatado)
console.log('Valor em reais: ' + valorEmReaisFormatado)*/


//Se valorEmReaisFormatado já for uma string formatada (por exemplo, R$ 10,00), o uso de .toFixed(2) pode gerar um erro, pois .toFixed(2) só funciona em valores numéricos. 
// alert('Valor em reais: R$ ' + valorEmReaisFormatado.toFixed(2) nao posso usar)

//OU ||


/*async function converterDolarParaReal(valorDolar) {
    const resposta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const dados = await resposta.json();
    const cotacao = parseFloat(dados.USDBRL.bid);
    
    return valorDolar * cotacao;
}

// Exemplo de uso:
converterDolarParaReal(100).then(valorReal => {
    console.log(`100 dólares equivalem a R$ ${valorReal.toFixed(2)}`)
})
converterDolarParaReal(1).then(valorReal => {
    console.log(`1 dólares equivalem a R$ ${valorReal.toFixed(2)}`)
})
converterDolarParaReal(50).then(valorReal => {
    console.log(`50 dólares equivalem a R$ ${valorReal.toFixed(2)}`)
})
converterDolarParaReal(25).then(valorReal => {
    console.log(`25 dólares equivalem a R$ ${valorReal.toFixed(2)}`)
})
converterDolarParaReal(1420).then(valorReal => {
    console.log(`1420 dólares equivalem a R$ ${valorReal.toFixed(2)}`)
})
converterDolarParaReal(710).then(valorReal => {
    console.log(`710 dólares equivalem a R$ ${valorReal.toFixed(2)}`)
})*/


//OU ||


/*async function converterDolarParaReal(valorEmDolares) {
    try {
        // Faz uma requisição para obter a cotação atual do dólar
        const resposta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        const dados = await resposta.json();

        // Extrai a taxa de câmbio de compra (bid)
        const cotacaoDolar = parseFloat(dados.USDBRL.bid);

        // Converte o valor de dólares para reais
        const valorEmReais = valorEmDolares * cotacaoDolar;

        console.log(`$${valorEmDolares.toFixed(2)} equivalem a R$${valorEmReais.toFixed(2)}.`);
    } catch (erro) {
        console.error('Erro ao obter a cotação do dólar:', erro);
    }
}

// Exemplo de uso:
converterDolarParaReal(1)
converterDolarParaReal(100)
converterDolarParaReal(50)
converterDolarParaReal(10)
converterDolarParaReal(20)
converterDolarParaReal(35)
converterDolarParaReal(1420)
converterDolarParaReal(710)*/

//OU ||




/*var valorEmDolares = 100 // Substitua este valor pelo valor em dólares que deseja converter
var cotacaoDolarParaReal = 5.70 // Cotação do dólar em reais

// Cálculo da conversão
var valorEmReais = valorEmDolares * cotacaoDolarParaReal

// Formatação do valor em reais para o formato de moeda brasileira
var valorEmReaisFormatado = 'R$ ' + valorEmReais.toFixed(2).replace('.', ',')
//.toFixed(2).replace('.', ',') formata um número com duas casas decimais
//replace('.', ',') substitui o ponto por vírgula

// Exibição do resultado
alert('Valor em reais: ' + valorEmReaisFormatado)
console.log('Valor em reais: ' + valorEmReaisFormatad*/