/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 25. 

Faça um script que leia o nome de uma pessoa, o ano de nascimento dessa pessoa e o ano atual, calcule e mostre a idade dessas pessoa e seu nome em linha separada.
*/

//Usa .trim() para limpar espaços em branco desnecessários no nome.
let nome = prompt("Digite o nome:").trim()
let anoNascimento = Number(prompt("Informe o ano de nascimento:"))
let anoAtual = Number(prompt("Informe o ano atual:"))

// Verifica se os valores inseridos são válidos
if (isNaN(anoNascimento) || isNaN(anoAtual) || anoNascimento > anoAtual) {
    alert("Por favor, insira anos válidos.")
} else {
    let idadeAtual = anoAtual - anoNascimento
    alert(`A idade de ${nome} é ${idadeAtual} anos.`)
    console.log(`A idade de ${nome} é ${idadeAtual} anos.`)
//IsNaN > Se o usuário inserir algo que não seja um número (como letras ou um campo vazio), isNaN(num) detecta isso e exibe uma mensagem apropriada.
}

//OU ||


/*let nome = prompt('Digite o nome: ')
let anoNascimento = Number(prompt('Informe o ano de nascimento'))
let anoAtual = Number(prompt('Informe o ano atual'))

let idadeAtual = anoAtual - anoNascimento

alert(`A idade de ${nome} é ${idadeAtual}`)*/