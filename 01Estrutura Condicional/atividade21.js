/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 21
. 

Faça um script que leia três nomes e em seguida os imprima, mostre o nome em cada linha.
*/
let nome1 = prompt('Informe o primeiro nome')
let nome2 = prompt('Informe o segundo nome')
let nome3 = prompt('Informe o terceiro nome')

alert(` ${nome1}\n ${nome2}\n ${nome3}\n`)
console.log('Informe cada nome:\n'+ nome1 + '\n' + nome2 + '\n' + nome3 + '\n'  )


//sem usar numeros

/*let nome1, nome2, nome3
const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Expressão regular para aceitar apenas letras e espaços

do {
    nome1 = prompt("Informe o primeiro nome:")
    if (!regex.test(nome1)) {
        alert("Por favor, insira apenas letras e espaços.")
    }
} while (!regex.test(nome1))

do {
    nome2 = prompt("Informe o segundo nome:")
    if (!regex.test(nome2)) {
        alert("Por favor, insira apenas letras e espaços.")
    }
} while (!regex.test(nome2))

do {
    nome3 = prompt("Informe o terceiro nome:")
    if (!regex.test(nome3)) {
        alert("Por favor, insira apenas letras e espaços.")
    }
} while (!regex.test(nome3))

alert(` ${nome1}\n ${nome2}\n ${nome3}\n`)
console.log('Informe cada nome:\n' + nome1 + '\n' + nome2 + '\n' + nome3 + '\n')

/*Explicação:
Criação da variável regex:

Define a expressão regular /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/ para permitir apenas letras e espaços.
Uso de RegExp.test():

regex.test(nome1), regex.test(nome2), regex.test(nome3) verificam se a entrada contém apenas letras e espaços.
Se a entrada for inválida, exibe um alert() e pede novamente dentro do do...while.*/