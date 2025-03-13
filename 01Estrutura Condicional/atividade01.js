/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 01. 

Faça um programa que leia três notas, calcule e mostre a média aritmética entre elas.*/ 

// Entrada de dados
let nota1 = parseFloat(prompt('Digite a primeira nota'))
let nota2 = parseFloat(prompt('Digite a segunda nota'))
let nota3 = parseFloat(prompt('Digite a terceira nota'))

let media = (nota1 + nota2 + nota3) / 3

alert(`A media = ${media.toFixed(2).replace('.', ',')}`)
console.log(`A media = ${media.toFixed(2).replace('.', ',')}`)
//.toFixed(2).replace('.', ',') formata um número com duas casas decimais
//replace('.', ',') substitui o ponto por vírgula



//USANDO FUNÇÃO

// Função para calcular a média aritmética

/*function calcularMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3
return media// Retorna a média para quem chamou a função,faz com que esse valor seja enviado de volta para onde a função foi chamada.
} 
  // Leitura das três notas
  const nota1 = parseFloat(prompt("Digite a primeira nota:"))
  const nota2 = parseFloat(prompt("Digite a segunda nota:"))
  const nota3 = parseFloat(prompt("Digite a terceira nota:"))
  // Chama a função para calcular a média
  const media = calcularMedia(nota1, nota2, nota3)
  // Exibe a média no console
  console.log(`A média das notas é: ${media.toFixed(2)}`)*/



  //USANDO WHILE

/*let notas = []//Esta linha cria um array vazio chamado notas.
//O array é uma estrutura de dados que serve para armazenar múltiplos valores. Aqui, vamos usar o array para armazenar as três notas inseridas pelo usuário.
let i = 0//A variável i é inicializada com o valor 0.
//Ela será usada como um contador dentro do laço while para controlar quantas vezes o loop será executado (no caso, 3 vezes para coletar 3 notas).
let soma = 0//A variável soma é inicializada com o valor 0. Ela será usada para acumular a soma das notas inseridas pelo usuário.


while (i < 3) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`))
    if (!isNaN(nota)) {
        notas.push(nota) // Adiciona a nota ao array. ou notas[i] = nota // Adiciona a nota no índice correspondente
        soma += nota // Soma a nota para o cálculo da média
        i++; // Incrementa o contador
    } else {
        alert("Por favor, insira um valor válido para a nota.")
    }
}

// Calculando a média
let media = soma / 3;

// Mostrando o resultado
alert(`A média das notas é: ${media}`)*/


/*let notas = [];
O que faz?
Esta linha cria um array vazio chamado notas.
O array é uma estrutura de dados que serve para armazenar múltiplos valores. Aqui, vamos usar o array para armazenar as três notas inseridas pelo usuário.
Por que usar?
Usamos esse array para organizar e armazenar todas as notas que o usuário fornecer durante a execução do programa. Mais tarde, podemos usar esse array, por exemplo, para calcular a média das notas.
2. let i = 0;
O que faz?
A variável i é inicializada com o valor 0.
Ela será usada como um contador dentro do laço while para controlar quantas vezes o loop será executado (no caso, 3 vezes para coletar 3 notas).
Por que usar?
O contador i é necessário porque o laço while precisa saber quantas vezes ele já rodou e quantas vezes ele precisa rodar ainda. A cada vez que o loop for executado, i será incrementado (aumentado de 1), até que i atinja 3, o que indicará que as 3 notas foram inseridas.
3. let soma = 0;
O que faz?
A variável soma é inicializada com o valor 0. Ela será usada para acumular a soma das notas inseridas pelo usuário.
Por que usar?
O objetivo aqui é somar as 3 notas fornecidas pelo usuário para, depois, calcular a média aritmética. Inicializamos a variável com 0 para garantir que ela comece com um valor neutro, de modo que, ao somarmos as notas, o total seja calculado corretamente.
Resumo do uso dessas variáveis:
notas: Para armazenar as notas inseridas.
i: Para contar quantas vezes o loop foi executado (e saber quando já inserimos 3 notas).
soma: Para somar as notas e calcular a média.*/

/*
Resumo do uso dessas variáveis:
notas: Para armazenar as notas inseridas.

i: Para contar quantas vezes o loop foi executado (e saber quando já inserimos 3 notas).

soma: Para somar as notas e calcular a média.


O processo de decisão:
Se você não sabe se precisa de uma variável ou qual tipo de variável usar, aqui está o raciocínio:

1.Preciso armazenar informações (notas)?
. Se sim, use um array para guardar essas notas. (É a estrutura de dados que vai te ajudar a armazenar múltiplos valores.)

2.Preciso contar algo?
. Se você precisa contar quantas vezes o código repetiu uma ação, use uma variável contador (como o i). Isso é muito comum em loops, como no while, onde você sabe que vai precisar repetir algo várias vezes (neste caso, 3 vezes).

3.Preciso acumular algo (como a soma das notas)?
. Se você precisa acumular valores, use uma variável acumuladora (como soma). Isso é necessário quando você está somando valores em cada iteração de um loop.


Conclusão:
. O array é necessário para guardar as notas inseridas.
. O contador (i) é necessário para saber quantas notas já foram inseridas e para controlar quantas vezes o loop while deve rodar.
. A variável soma é necessária para acumular as notas, já que a média é calculada dividindo a soma pelo número de notas.

Essas variáveis são essenciais para controlar o fluxo do programa e garantir que a tarefa (calcular a média das notas) seja feita corretamente. Com o tempo, você vai se acostumar com essas decisões ao programar.



*/