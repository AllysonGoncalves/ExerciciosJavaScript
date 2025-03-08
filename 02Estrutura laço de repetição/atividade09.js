/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 09.

Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.
*/
//let num = Number(prompt('Digite um numero'))

for (let i = 1; i <= 20; i++){
    console.log(i)
}

let resultado =''
for (let i = 1; i <= 20; i++){
    resultado += i + ' ' // Adiciona o número e um espaço
}
console.log(resultado); // Mostra tudo na mesma linha

//O que é document.write?
//O document.write() é um comando do JavaScript que escreve diretamente no corpo do HTML. Ou seja, ele insere texto ou código HTML na página do navegador. Isso significa que document.write() pega o que você colocar dentro dos parênteses e escreve na página.
//document.write(resultado)

/*for (let i = 1; i <= 20; i++) {
    document.write(i + " "); // Escreve diretamente na página
}*/
