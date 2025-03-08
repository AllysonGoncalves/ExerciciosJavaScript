/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 06. 

Faça programa que leia uma temperatura em graus Fahrenheit, calcular e escrever o
valor correspondente em graus Celsius.*/

// Lê a temperatura em Fahrenheit
let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"))

// Calcula a temperatura em Celsius
let celsius = (fahrenheit - 32) * 5 / 9

// Exibe o resultado
alert(fahrenheit + " graus Fahrenheit é igual a " + celsius.toFixed(2) + " graus Celsius.")
console.log(fahrenheit + " graus Fahrenheit é igual a " + celsius.toFixed(2) + " graus Celsius.")


//USANDO FUNÇÃO

/*function Fahrenheit(celsius) {
    return (celsius * 9 / 5) + 32; // Fórmula correta para converter Celsius em Fahrenheit
}

// Solicita a entrada do usuário
let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"))

// Verifica se a entrada é um número válido
if (!isNaN(celsius)) {
    let fahrenheit = Fahrenheit(celsius)
    alert(`A temperatura ${celsius}°C em Fahrenheit é ${fahrenheit.toFixed(2)}°F`)
} else {
    alert("Por favor, insira um valor numérico válido.")
} */

//IsNaN > Se o usuário inserir algo que não seja um número (como letras ou um campo vazio), isNaN(num).