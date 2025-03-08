/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 27. 

Um comerciante comprou um produto e quer vendê-lo com lucro de 45% se o valor da
compra for menor que R$ 20,00; caso contrário, o lucro será de 30%. Ler o valor do produto e
imprimir o valor da venda (conforme as taxas do enunciado).*/


/*Para resolver, você pode seguir os seguintes passos:
Solicite ao usuário o valor de compra do produto.
Verifique se o valor de compra é menor que R$ 20,00.
Se o valor de compra for menor que R$ 20,00, calcule o valor de venda adicionando um lucro de 45% ao valor de compra.
Caso contrário, calcule o valor de venda adicionando um lucro de 30% ao valor de compra.
Exiba o valor de venda.*/

// Entrada de dados
let valorDaCompra = parseFloat(prompt('Digite o valor de compra do produto:'))
let valorDaVenda = 0
let lucro = 0

if (isNaN(valorDaCompra) || (isNaN(valorDaCompra <= 0))){
    alert('Por favor, digite um valor válido para a compra.')
}else if(valorDaCompra < 20){
    lucro = valorDaCompra * 0.45
}else{
    lucro = valorDaCompra * 0.30
}
valorDaVenda = valorDaCompra + lucro

alert("O valor de venda do produto é: R$ " + valorDaVenda.toFixed(2).replace('.', ','))
console.log("O valor de venda do produto é: R$ " + valorDaVenda.toFixed(2).replace('.', ','))






/*let valorCompra = parseFloat(prompt('Digite o valor de compra do produto:'))
let valorVenda = 0
let lucro = 0 // Declarando a variável lucro

if (isNaN(valorCompra) || valorCompra <= 0) {
    alert("Por favor, digite um valor válido para a compra.")
}else if (valorCompra < 20) { // Corrigido para "<" conforme o enunciado
    lucro = valorCompra * 0.45
} else {
    lucro = valorCompra * 0.30
}

valorVenda = valorCompra + lucro

alert("O valor de venda do produto é: R$ " + valorVenda.toFixed(2))
console.log("O valor de venda do produto é: R$ " + valorVenda.toFixed(2))*/
