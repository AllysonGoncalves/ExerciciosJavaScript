/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 11. 

Faça um programa que leia três notas, calcule e mostre a média aritmética entre elas,
se a media aritmética for:
♦ Media maior ou igual a 7 – ALUNO APROVADO
♦ Media menor que 7 – ALUNO REPROVADO*/

// Entrada de dados
let nota1 = Number(prompt('Digite a primeira nota'))
let nota2 = Number(prompt('Digite a segunda nota'))
let nota3 = Number(prompt('Digite a terceira nota'))


// let media = (nota1 + nota2 + nota3) / 3

// if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota1 > 10 || nota2 > 10 || nota3 > 10) {
//     alert('Por favor, insira notas válidas entre 0 e 10.')
// }else if (media >= 7){
//     alert(`Media: ${media.toFixed(2).replace('.',',')} \nAluno(a): APROVADO`)
//     console.log('Aluno(a): APROVADO')
// }else{
//     alert(`Media: ${media.toFixed(2).replace('.',',')}\nAluno(a): REPROVADO`)
//     console.log('Aluno(a): APROVADO')
// }


let notasValidos = (isNaN(nota1) && isNaN(nota2) && isNaN(nota3) &&
                   nota1 > 0 && nota2 > 0 && nota3 > 0 &&
                   nota1 <= 10 && nota2 <= 10 && nota3 <= 10);

if (notasValidos = true)  {

    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 0 && media < 7) {
        console.log(`Aluno(a): REPROVADO, MÉDIA: ${media.toFixed(2)}`)
    } else if (media >= 7 && media < 8) {
        console.log(`Aluno(a): RECUPERAÇÃO, MÉDIA: ${media.toFixed(2)}`)
    } else {
        console.log(`Aluno(a): APROVADO, MÉDIA: ${media.toFixed(2)}`)
    }
} else {
    alert('Por favor, insira notas válidas entre 0 e 10.')
}

//OU ||


/*function calcularMedia(nota1, nota2, nota3) {
    // Calculando a média aritmética
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

function verificarAprovacao(media) {
    // Verificando se o aluno foi aprovado ou reprovado
    if (media >= 7) {
        console.log("ALUNO APROVADO");
    } else {
        console.log("ALUNO REPROVADO");
    }
}

// Leitura das notas
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

// Calculando a média
let media = calcularMedia(nota1, nota2, nota3);

// Verificando a aprovação
verificarAprovacao(media);

// Exibindo a média no console
console.log(`Média do aluno: ${media.toFixed(2)}`)*/


//OU ||


/*let nota1 = Number(prompt('Digite a primeira nota'))
let nota2 = Number(prompt('Digite a segunda nota'))
let nota3 = Number(prompt('Digite a terceira nota'))

let media = (nota1 + nota2 + nota3) / 3
let mediaFormatada = media.toFixed(2).toLocaleString('pt-BR')
//toLocaleString('pt-BR') retorna uma string com uma representação sensível a linguagem deste número.

//Se o usuário inserir algo que não seja um número (como letras ou um campo vazio), isNaN(num) detecta isso e exibe uma mensagem apropriada.
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota1 > 10 || nota2 > 10 || nota3 > 10) {
    alert('Por favor, insira notas válidas entre 0 e 10.')
} else {
    alert(`MÉDIA: ${mediaFormatada}\n${media >= 7 ? 'ALUNO APROVADO' : 'ALUNO REPROVADO'}`)
    console.log(`MÉDIA: ${mediaFormatada} - ${media >= 7 ? 'ALUNO APROVADO' : 'ALUNO REPROVADO'}`)
}*/


//OU ||


/*let nota1 = Number(prompt('Digite a primeira nota'));
let nota2 = Number(prompt('Digite a segunda nota'));
let nota3 = Number(prompt('Digite a terceira nota'));

//Se o usuário inserir algo que não seja um número (como letras ou um campo vazio), isNaN(num) detecta isso e exibe uma mensagem apropriada.
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota1 > 10 || nota2 > 10 || nota3 > 10) {
    alert('Por favor, insira notas válidas entre 0 e 10.');
} else {
    let media = (nota1 + nota2 + nota3) / 3;
    let mediaFormatada = media.toFixed(2).toLocaleString('pt-BR');
//toLocaleString('pt-BR') retorna uma string com uma representação sensível a linguagem deste número.
    alert(`MÉDIA: ${mediaFormatada}\n${media >= 7 ? 'ALUNO APROVADO' : 'ALUNO REPROVADO'}`);
    console.log(`MÉDIA: ${mediaFormatada} - ${media >= 7 ? 'ALUNO APROVADO' : 'ALUNO REPROVADO'}`);
}*/