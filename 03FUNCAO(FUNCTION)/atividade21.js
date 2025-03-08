/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 ( Exercícios Avançados)
Ex: 20.
Crie um programa que receba notas e seus respectivos pesos, calcule e retorne a média ponderada. O programa deve conter uma função chamada calcularMediaPonderada() que recebe dois arrays: um com as notas e outro com os pesos. A função deve retornar a média ponderada.
*/
/*notas.length !== pesos.length
!== significa "diferente de".
Verifica se o tamanho do array notas é diferente do tamanho do array pesos.
Se os tamanhos forem diferentes, não é possível calcular a média ponderada corretamente.*/
function calcularMediaPonderada(notas, pesos) {
    // Verifica se os arrays têm o mesmo tamanho
    if (notas.length !== pesos.length || notas.length === 0) {
        console.error("Os arrays de notas e pesos devem ter o mesmo tamanho e não podem estar vazios.")//informa ao programador que houve um problema com os dados de entrada. No console do navegador ou do Node.js, o erro aparece em vermelho, facilitando a identificação do problema.
        return null;//O return null; impede que o código continue a execução caso haja um erro.
    }
    // Calcula a soma dos produtos (nota * peso)
    let somaPonderada = notas.reduce((acc, nota, i) => acc + nota * pesos[i], 0);
    // Calcula a soma dos pesos
    let somaPesos = pesos.reduce((acc, peso) => acc + peso, 0);
    // Retorna a média ponderada ou 0 se somaPesos for 0
    return somaPesos !== 0 ? somaPonderada / somaPesos : 0;
}
// Teste do programa
const notas = [8.0, 7.5, 10.0];
const pesos = [3, 2, 5];

const media = calcularMediaPonderada(notas, pesos);
if (media !== null) {
    console.log(`A média ponderada é: ${media.toFixed(2)}`);
}

/*notas.length !== pesos.length
Isso verifica se os arrays notas e pesos têm tamanhos diferentes.
Por que isso é necessário?
Cada nota deve ter um peso correspondente. Se os arrays tiverem tamanhos diferentes, não faz sentido multiplicar, pois faltarão ou sobrarão elementos.

notas.length === 0
Isso verifica se o array notas está vazio.
Por que isso é necessário?
Se notas (ou pesos) for vazio, não há como calcular uma média, e evitar esse erro logo no início é uma boa prática.

Se os arrays têm tamanhos diferentes OU estão vazios, o código mostra um erro e interrompe a execução (return null;).
*/

/*Exemplo básico de reduce()
Vamos somar todos os números de um array:
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, elementoAtual) => acumulador + elementoAtual, 0);
console.log(soma); // Saída: 15*/


/*
Explicação do Código:
Função calcularMediaPonderada(notas, pesos):

Verifica se os arrays têm o mesmo tamanho e se não estão vazios.
Calcula a soma ponderada (multiplicando cada nota pelo seu respectivo peso).
Calcula a soma dos pesos.
Retorna a média ponderada, evitando divisão por zero.
Uso do reduce():

reduce() percorre o array somando os valores multiplicados (nota * peso).
reduce() também soma os pesos para fazer a divisão final.
Formatação da saída:

toFixed(2) garante que a média seja exibida com duas casas decimais.
Possíveis Melhorias:
Aceitar entrada do usuário via prompt().
Adaptar para um programa interativo no navegador.
Adicionar tratamento de erros mais detalhado.
Esse código é eficiente e pronto para ser usado em aplicações reais! 
*/