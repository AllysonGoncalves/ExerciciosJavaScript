/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 21.

Suponha que você queira somar os números de 1 a 10. Você pode fazer isso com um loop for:
*/
let soma = 0//serve para acumular a soma dos números durante o processo do loop. 

for (let i = 1; i <= 10; i++) {
    soma += i// Adiciona o valor de 'i' à variável 'soma'
}
alert('A soma de 1 à 10 = ' + soma)
console.log(soma)// Exibe o resultado: 55



/*
Explicação:
Inicialização: let i = 1 (começamos com 1)
Condição: i <= 10 (o loop continua enquanto i for menor ou igual a 10)
Incremento: i++ (incrementamos i de 1 em 1)
A cada iteração, o valor de i é somado à variável soma, e ao final o resultado é 55 (a soma de 1 + 2 + 3 + ... + 10).
Resumo:
O for é ideal quando você tem um número conhecido de iterações ou quando está trabalhando com uma sequência de números, como índices de array, e deseja controlar o fluxo de repetição de forma explícita e compacta.

Ideal para: Iterações com contadores (de 1 a N, ou em intervalos específicos).
Exemplo comum: Percorrer arrays ou listas de números.
*/