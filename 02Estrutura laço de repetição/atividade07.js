/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 07.

Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1
a 100.*/

let num = 2
while (num <= 100) {
    let quadrado = num * num
    console.log(`O quadrado de ${num} é ${quadrado}`)
    num += 2 // Incrementa de 2 em 2 para pegar os números pares; num = num + 2
}

//USAR O FOR é melhor nesse exemplo

/*for (let i = 2; i <= 100; i += 2) {
    let quadrado = i * i;
    console.log(`O quadrado de ${i} é ${quadrado}`);
}*/



//OU  ||


/*
let pares = 0;  // Para contar quantos números pares foram processados
let contador = 2;  // Começa com o primeiro número par

while (contador <= 100) {
    let quadrado = contador * contador; // Calcula o quadrado do número
    console.log(`O quadrado de ${contador} é ${quadrado}`);
    
    pares++;  // Incrementa a variável 'pares' a cada número par processado
    contador += 2;  // Incrementa de 2 em 2 para pegar os números pares
}

console.log(`Foram processados ${pares} números pares.`);

*/


//for (inicialização; condição; incremento) {
    // Bloco de código a ser executado
//}

/*Inicialização (let i = 0;):

Aqui, estamos criando a variável i e atribuindo a ela o valor 0. Essa será a nossa variável de controle.
Condição (i < 5;):

O loop continuará a rodar enquanto i for menor que 5. Ou seja, o loop irá rodar 5 vezes: quando i for 0, 1, 2, 3 e 4.
Incremento (i++):

Após cada iteração, i será incrementado em 1 (i++ é equivalente a i = i + 1).
Fluxo do código:
Na primeira iteração, i é 0. O loop executa console.log(0), e i é incrementado para 1.
Na segunda iteração, i é 1. O loop executa console.log(1), e i é incrementado para 2.
Esse processo continua até i ser 5, momento em que a condição i < 5 se torna false, e o loop é encerrado.

Resumo:
O for é ideal quando você tem um número conhecido de iterações ou quando está trabalhando com uma sequência de números, como índices de array, e deseja controlar o fluxo de repetição de forma explícita e compacta.

Ideal para: Iterações com contadores (de 1 a N, ou em intervalos específicos).
Exemplo comum: Percorrer arrays ou listas de números.

/*
Quando usar cada um:

Use FOR - quando o número de iterações e a estrutura de incremento for bem definida, como no seu caso, onde você sabe que vai iterar de 2 em 2 até 100.
Use WHILE - quando a condição de continuidade for mais complexa ou quando você não tiver certeza de quantas iterações será necessário fazer.
*/



