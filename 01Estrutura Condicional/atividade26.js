/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 26. 

No dia da estreia do filme “Os Vingadores”, uma emissora de TV realizou uma pesquisa. Cada espectador respondeu a um questionário no qual constava sua idade e sua opinião em relação ao filme: excelente – 3; bom – 2; regular – 1. Criar um algoritmo que receba a idade a opinião de N espectadores, calcular e exibir:
• A quantidade de pessoas em cada opinião;
• A média da idade das pessoas em cada opinião;
• A porcentagem de resposta para cada opinião.*/


let excelente = 0, bom = 0, regular = 0// contagem das opiniões
let idadeExcelente = 0, idadeBom = 0, idadeRegular = 0// soma das idades para cada opinião
let totalPessoas = 0// contagem do total de pessoas entrevistadas

let continuar = true//O loop while continua rodando enquanto continuar for true
while (continuar) {
    let idade = parseInt(prompt("Digite sua idade:"));
    let opiniao = parseInt(prompt("Digite sua opinião sobre o filme\n3-Excelente\n 2-Bom\n 1-Regular"))
    
    if (opiniao === 3) {
        excelente++
        idadeExcelente += idade
    } else if (opiniao === 2) {
        bom++
        idadeBom += idade
    } else if (opiniao === 1) {
        regular++
        idadeRegular += idade
    }
    
    totalPessoas++
    continuar = confirm("Deseja continuar?")
}

alert("Quantidade de opiniões:")
alert("Excelente: " + excelente)
alert("Bom: " + bom)
alert("Regular: " + regular)
console.log("Quantidade de opiniões:")
console.log("Excelente: " + excelente)
console.log("Bom: " + bom)
console.log("Regular: " + regular)

//alert("Média de idade por opinião:")
//alert("Excelente: " + (excelente > 0 ? (idadeExcelente / excelente).toFixed(2) : "N/A"))
//alert("Bom: " + (bom > 0 ? (idadeBom / bom).toFixed(2) : "N/A"))
//alert("Regular: " + (regular > 0 ? (idadeRegular / regular).toFixed(2) : "N/A"))
console.log("Média de idade por opinião:")
console.log("Excelente: " + (excelente > 0 ? (idadeExcelente / excelente).toFixed(2) : "N/A"))
console.log("Bom: " + (bom > 0 ? (idadeBom / bom).toFixed(2) : "N/A"))
console.log("Regular: " + (regular > 0 ? (idadeRegular / regular).toFixed(2) : "N/A"))

//alert("Porcentagem de respostas:")
//alert("Excelente: " + ((excelente / totalPessoas) * 100).toFixed(2) + "%")
//alert("Bom: " + ((bom / totalPessoas) * 100).toFixed(2) + "%")
//alert("Regular: " + ((regular / totalPessoas) * 100).toFixed(2) + "%")
console.log("Porcentagem de respostas:")
console.log("Excelente: " + ((excelente / totalPessoas) * 100).toFixed(2) + "%")
console.log("Bom: " + ((bom / totalPessoas) * 100).toFixed(2) + "%")
console.log("Regular: " + ((regular / totalPessoas) * 100).toFixed(2) + "%")

/*
excelente, bom, regular → Contam quantas pessoas escolheram cada opção.
idadeExcelente, idadeBom, idadeRegular → Guardam a soma das idades das pessoas que escolheram cada opção.
totalPessoas → Conta o total de participantes.
*/



//OU ||

/*function pesquisaFilme() {
    let totalEspectadores = parseInt(prompt("Quantos espectadores participaram da pesquisa?"))
    let opinioes = { excelente: 0, bom: 0, regular: 0 }
    let idades = { excelente: [], bom: [], regular: [] }

    for (let i = 0; i < totalEspectadores; i++) {
        let idade = parseInt(prompt(`Digite a idade do espectador ${i + 1}:`))
        let opiniao = parseInt(prompt(`Digite a opinião do espectador ${i + 1} (3 - Excelente, 2 - Bom, 1 - Regular):`))

        if (opiniao === 3) {
            opinioes.excelente++
            idades.excelente.push(idade)
        } else if (opiniao === 2) {
            opinioes.bom++
            idades.bom.push(idade)
        } else if (opiniao === 1) {
            opinioes.regular++
            idades.regular.push(idade)
        } else {
            console.log("Opinião inválida! Registro ignorado.")
        }
    }

    function calcularMedia(idadesArray) {
        if (idadesArray.length === 0) return 0;
        return (idadesArray.reduce((a, b) => a + b, 0) / idadesArray.length).toFixed(2)
    }

    function calcularPorcentagem(qtd) {
        return ((qtd / totalEspectadores) * 100).toFixed(2) + "%"
    }

    console.log("Resultados da pesquisa:")
    console.log(`Quantidade de respostas Excelente: ${opinioes.excelente}, Média de idade: ${calcularMedia(idades.excelente)}, Porcentagem: ${calcularPorcentagem(opinioes.excelente)}`)
    console.log(`Quantidade de respostas Bom: ${opinioes.bom}, Média de idade: ${calcularMedia(idades.bom)}, Porcentagem: ${calcularPorcentagem(opinioes.bom)}`)
    console.log(`Quantidade de respostas Regular: ${opinioes.regular}, Média de idade: ${calcularMedia(idades.regular)}, Porcentagem: ${calcularPorcentagem(opinioes.regular)}`)
}

pesquisaFilme()*/