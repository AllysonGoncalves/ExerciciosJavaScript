/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 20.

O cardápio de uma lanchonete é o seguinte:

Especificação      Código  Preço

Cachorro Quente    100     R$ 1,20
Bauru Simples      101     R$ 1,30
Bauru com ovo      102     R$ 1,50
Hambúrguer         103     R$ 1,20
Cheeseburguer      104     R$ 1,30
Refrigerante       105     R$ 1,00

Faça um programa que leia o código dos itens pedidos e as quantidades desejadas. Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do pedido. Considere que o cliente deve informar quando o pedido deve ser encerrado.
*/
let totalGeral = 0
let continuar = true

while (continuar) {
  // Solicitar o código do item
  let codigo = prompt("Digite o código do item (100 a 105) ou '0' para encerrar:")

  // Encerrar o pedido se o código for 0
  if (codigo == '0') {
    continuar = false
    break//para o loop
  }

  // Solicitar a quantidade do item
  let quantidade = parseInt(prompt("Digite a quantidade do item:"))

  let preco = 0

  // Definir o preço com base no código
  if (codigo == '100') {
    preco = 1.20
  } else if (codigo == '101') {
    preco = 1.30
  } else if (codigo == '102') {
    preco = 1.50
  } else if (codigo == '103') {
    preco = 1.20
  } else if (codigo == '104') {
    preco = 1.30
  } else if (codigo == '105') {
    preco = 1.00
  } else {
    alert("Código inválido, tente novamente.")
    continue
  }

  // Calcular o valor do item
  let valorItem = preco * quantidade

  // Exibir o valor a ser pago por item
  alert("Valor do item: R$ " + valorItem.toFixed(2))

  // Acumular o total geral
  totalGeral += valorItem
}

// Exibir o total geral
alert("Total geral: R$ " + totalGeral.toFixed(2));
