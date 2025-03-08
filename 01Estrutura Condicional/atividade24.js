/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 24. 

Uma loja utiliza o código V para compras à vista e o código P para compras a prazo. Faça um
algoritmo que receba o código e o valor de N transações. Inicialmente deverá receber os N valores através
de uma estrutura de repetição. Em seguida mostrar um menu utilizando o Switch e repetição para o
seguinte menu:
• O valor total das compras à vista;
• O valor total das compras a prazo;
• O valor total das compras efetuadas;
• Sair da aplicação.*/

let numTransacoes = parseInt(prompt("Digite o número de transações:"))

let totalVista = 0
let totalPrazo = 0

for (let i = 0; i < numTransacoes; i++) {
    let codigo = prompt("Digite o código da transação (V para à vista, P para a prazo):").toUpperCase()
    let valor = parseFloat(prompt("Digite o valor da transação:"))

    if (codigo === "V") {
        totalVista += valor
    } else if (codigo === "P") {
        totalPrazo += valor
    } else {
        alert("Código inválido. Transação ignorada.")
        i-- // Decrementa para repetir a entrada dessa transação
    }
}
let opcao
do {
    opcao = parseInt(prompt(
        "Menu:\n" +
        "1 - Mostrar o valor total das compras à vista\n" +
        "2 - Mostrar o valor total das compras a prazo\n" +
        "3 - Mostrar o valor total das compras efetuadas\n" +
        "4 - Sair"
    ))
 // Executa a opção escolhida
    switch (opcao) {
        case 1:
            alert("Total das compras à vista: R$ " + totalVista.toFixed(2))
            break
        case 2:
            alert("Total das compras a prazo: R$ " + totalPrazo.toFixed(2))
            break
        case 3:
            alert("Total das compras efetuadas: R$ " + (totalVista + totalPrazo).toFixed(2))
            break
        case 4:
            alert("Saindo da aplicação...")
            break
        default:
            alert("Opção inválida! Tente novamente.")
    }
} while (opcao !== 4)// Enquanto a opção não for "Sair"


//OU ||



/*function lojaTransacoes() {
    let totalVista = 0
    let totalPrazo = 0
    
    let n = parseInt(prompt("Quantas transações deseja inserir?"))
    
    for (let i = 0; i < n; i++) {
        let codigo = prompt("Digite o código da transação (V para à vista, P para a prazo):").toUpperCase()
        //toUpperCase() converte uma string para letras maiúsculas. É uma ferramenta útil para modificar o caso das letras em strings. 
        let valor = parseFloat(prompt("Digite o valor da transação:"))
        
        if (codigo === 'V') {
            totalVista += valor
        } else if (codigo === 'P') {
            totalPrazo += valor
        } else {
            alert("Código inválido! Transação ignorada.")
        }
    }
    
    let opcao
    do {
        opcao = parseInt(prompt("Escolha uma opção:\n1 - Valor total das compras à vista\n2 - Valor total das compras a prazo\n3 - Valor total das compras efetuadas\n4 - Sair"))
        
        switch (opcao) {
            case 1:
                alert(`Valor total das compras à vista: R$ ${totalVista.toFixed(2)}`)
                break
            case 2:
                alert(`Valor total das compras a prazo: R$ ${totalPrazo.toFixed(2)}`)
                break
            case 3:
                alert(`Valor total das compras efetuadas: R$ ${(totalVista + totalPrazo).toFixed(2)}`)
                break
            case 4:
                alert("Saindo da aplicação...")
                break
            default:
                alert("Opção inválida! Tente novamente.")
        }
    } while (opcao !== 4)
}

lojaTransacoes()*/


/*
Vamos simplificar o que o código faz, explicando passo a passo.

Número de Transações: O código começa pedindo para o usuário digitar o número de transações (N). Ou seja, quantas compras ele fez.

Coleta de Dados: Para cada transação (compra), o código vai perguntar:

Se a compra foi "à vista" (código V) ou "a prazo" (código P).
O valor da compra.
Armazenamento de Totais: O código vai somar:

O total das compras à vista (código V).
O total das compras a prazo (código P).
Menu de Opções: Depois que todas as transações forem registradas, o código apresenta um menu com 4 opções:

Mostrar o total das compras à vista.
Mostrar o total das compras a prazo.
Mostrar o total de todas as compras (à vista + a prazo).
Sair do programa.
Escolha do Usuário: O usuário escolhe uma das opções, e o programa mostra a informação correspondente. O menu vai continuar aparecendo até o usuário escolher a opção de sair.

Vou dar um exemplo simples de como funciona:

Exemplo:

Se o usuário tem 3 compras:
A primeira compra foi à vista de R$ 100,00 (código V).
A segunda compra foi a prazo de R$ 200,00 (código P).
A terceira compra foi à vista de R$ 50,00 (código V).
O que o programa vai fazer:

Ele vai somar o total das compras à vista (R$ 100,00 + R$ 50,00 = R$ 150,00).
Vai somar o total das compras a prazo (R$ 200,00).
Vai calcular o total geral de compras (R$ 150,00 + R$ 200,00 = R$ 350,00).
Depois vai mostrar o menu para o usuário, onde ele pode ver os totais de cada tipo de compra ou sair.

Vou detalhar cada parte para você entender melhor:
Perguntar o número de transações:

javascript
Copiar
Editar
let numTransacoes = parseInt(prompt("Digite o número de transações:"));
Iniciar variáveis para armazenar os totais:

javascript
Copiar
Editar
let totalVista = 0;
let totalPrazo = 0;
Loop para registrar as transações:

javascript
Copiar
Editar
for (let i = 0; i < numTransacoes; i++) {
    let codigo = prompt("Digite o código da transação (V para à vista, P para a prazo):").toUpperCase();
    let valor = parseFloat(prompt("Digite o valor da transação:"));

    if (codigo === "V") {
        totalVista += valor;
    } else if (codigo === "P") {
        totalPrazo += valor;
    } else {
        alert("Código inválido. Transação ignorada.");
        i--; // Decrementa para repetir a entrada dessa transação
    }
}
Menu de opções para o usuário escolher:

javascript
Copiar
Editar
let opcao;
do {
    opcao = parseInt(prompt(
        "Menu:\n" +
        "1 - Mostrar o valor total das compras à vista\n" +
        "2 - Mostrar o valor total das compras a prazo\n" +
        "3 - Mostrar o valor total das compras efetuadas\n" +
        "4 - Sair"
    ));

    switch (opcao) {
        case 1:
            alert("Total das compras à vista: R$ " + totalVista.toFixed(2));
            break;
        case 2:
            alert("Total das compras a prazo: R$ " + totalPrazo.toFixed(2));
            break;
        case 3:
            alert("Total das compras efetuadas: R$ " + (totalVista + totalPrazo).toFixed(2));
            break;
        case 4:
            alert("Saindo da aplicação...");
            break;
        default:
            alert("Opção inválida! Tente novamente.");
    }
} while (opcao !== 4);

Resumo:
O código coleta os dados das transações (quantas foram à vista e quantas a prazo).
Depois, ele exibe um menu onde você pode ver o total de cada tipo de compra e o total geral.
O programa vai continuar pedindo opções até você escolher "Sair".
*/