/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 01. 

/*Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. */

let nota = Number(prompt('Informe a nota entre 0 e 10: '))

//IsNaN > Se o usuário inserir algo que não seja um número (como letras ou um campo vazio).
while (isNaN(nota) || nota < 0 || nota > 10){
    alert('Valor inválido! Digite uma nota entre 0 e 10.')
    nota = Number(prompt("Digite uma nota entre 0 e 10:"))
}
    alert("Nota válida: " + nota)
    console.log(`Nota valida é: ${nota}`)



   /* let i = 0;  // Inicialização

    while (i < 5) {  // Condição
        console.log("Número:" , i);
        i++;  // Incremento
    }*/



/*
✅ Se você quer um loop garantido que sempre pede um valor até ser correto, use while (true) com break.
✅ Se você quer evitar um loop infinito e já faz uma verificação inicial, use while (isNaN(nota) || nota < 0 || nota > 10).
*/
// OU ||


/*
let nota;

do {
    nota = prompt("Digite uma nota entre 0 e 10:");

    if (nota === null) {
        alert("Operação cancelada.");
        break;
    }

    nota = Number(nota);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Valor inválido! Digite uma nota entre 0 e 10.");
    }

} while (isNaN(nota) || nota < 0 || nota > 10);

if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    alert("Nota válida: " + nota);
}*/


// USO DO FOR

//O for não é a estrutura mais comum para esse tipo de repetição, mas podemos usá-lo simulando um while
//for (INICIALIZAÇÃO; CONDIÇÃO; INCREMENTO)

/*let nota;

for (
    nota = Number(prompt("Digite uma nota entre 0 e 10:"));
    isNaN(nota) || nota < 0 || nota > 10;
    nota = Number(prompt("Valor inválido! Digite uma nota entre 0 e 10:"))
);

alert("Nota válida: " + nota);
console.log("Nota válida: " + nota)*/

