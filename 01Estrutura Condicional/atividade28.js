/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 28. 

A prefeitura permitiu empréstimos a seus funcionários onde o valor máximo da prestação não pode ultrapassar 30% do salário. Dados os valores do salário, o valor do empréstimo, a quantidade de prestações do pagamento do empréstimo e a taxa de juros cobrada no empréstimo; informa se o empréstimo é permitido ou não, se o empréstimo for permitido, informar o valor da prestação e o valor total a pagar.*/

// Entrada de dados
let salario = parseFloat(prompt('Digite o salário do funcionário:'))
let valorEmprestimo = parseFloat(prompt('Digite o valor do empréstimo:'))
let numeroPrestacoes = parseInt(prompt('Digite a quantidade de prestações:'))
let taxaJuros = parseFloat(prompt('Digite a taxa de juros anual (%):'))

// Cálculo do valor da prestação e da taxa de juros mensal
let taxaJurosMensal = (taxaJuros / 100) / 12 // Convertendo taxa anual para mensal
let valorPrestacao = (valorEmprestimo * (1 + taxaJurosMensal * numeroPrestacoes)) / numeroPrestacoes

// Cálculo do valor total a ser pago
let valorTotal = valorPrestacao * numeroPrestacoes

// Verificando se o valor da prestação não ultrapassa 30% do salário
let limitePrestacao = salario * 0.30

if (valorPrestacao <= limitePrestacao) {
    alert("Empréstimo permitido!\nValor da prestação: R$ " + valorPrestacao.toFixed(2) + "\nValor total a pagar: R$ " + valorTotal.toFixed(2))
    console.log("Empréstimo permitido!")
    console.log("Valor da prestação: R$ " + valorPrestacao.toFixed(2))
    console.log("Valor total a pagar: R$ " + valorTotal.toFixed(2))
} else {
    alert("Empréstimo não permitido! O valor da prestação excede 30% do salário.")
    console.log("Empréstimo não permitido! O valor da prestação excede 30% do salário.")
}

/*
O trecho valorEmprestimo * (1 + taxaJurosMensal * numeroPrestacoes) / numeroPrestacoes é a fórmula usada para calcular o valor da prestação mensal do empréstimo, considerando juros simples. Vou explicar passo a passo como ela funciona:

taxaJurosMensal * numeroPrestacoes: Aqui, estamos calculando o impacto total dos juros ao longo de todas as parcelas. Ou seja, multiplicamos a taxa de juros mensal pelo número de parcelas para encontrar o total de juros que será adicionado ao valor do empréstimo.

1 + taxaJurosMensal * numeroPrestacoes: Agora, somamos 1 a esse valor calculado. Isso significa que estamos levando em consideração o valor inicial do empréstimo (que é 1) e o total de juros ao longo do período. Então, se os juros totais forem, por exemplo, 0,10 (ou 10%), o fator será 1,10.

valorEmprestimo * (1 + taxaJurosMensal * numeroPrestacoes): Aqui multiplicamos o valor do empréstimo pelo fator de juros total, ou seja, calculamos quanto o empréstimo vai crescer devido aos juros ao longo de todas as parcelas.

/ numeroPrestacoes: Finalmente, dividimos o valor total (empréstimo mais juros) pelo número de parcelas, o que nos dá o valor da prestação mensal.

Exemplo para ilustrar:

Suponha que o empréstimo seja de R$ 1.000.
A taxa de juros mensal seja 1% (ou 0,01).
O número de parcelas seja 12 meses.
Então, o cálculo seria assim:

taxaJurosMensal * numeroPrestacoes = 0,01 * 12 = 0,12 (ou 12% de juros no total).
1 + 0,12 = 1,12 (isso é, o valor do empréstimo cresce 12% no total).
valorEmprestimo * 1,12 = 1000 * 1,12 = 1120 (o valor do empréstimo com juros).
1120 / 12 = 93,33 (o valor da prestação mensal será R$ 93,33).
Esse seria o valor da prestação mensal considerando juros simples.

Resumo:
A fórmula basicamente pega o valor do empréstimo, adiciona os juros totais (ao longo das parcelas), e depois divide pelo número de parcelas para calcular o valor da prestação mensal.
*/