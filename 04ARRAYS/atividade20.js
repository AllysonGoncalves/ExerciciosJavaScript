/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ARRAYS
Exercícios Avançados
Ex: 20.
Dado um array [1, 2, 3, 4, 5], embaralhe os elementos aleatoriamente.
*/
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Gera um índice aleatório
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

let numeros = [1, 2, 3, 4, 5];

let numerosEmbaralhados = embaralhar(numeros);

console.log(numerosEmbaralhados); // Saída: array embaralhado, ex: [4, 2, 1, 5, 3]

/*
1. A função embaralhar(array) percorre o array de trás para frente e troca cada elemento com outro de posição aleatória.
2. Math.floor(Math.random() * (i + 1)) gera um número aleatório entre 0 e i.
Usamos a técnica de desestruturação ([array[i], array[j]] = [array[j], array[i]]) para trocar os valores.
3. O resultado será um array embaralhado de forma aleatória, e o mesmo array será modificado diretamente.

Exemplo de saída possível: [4, 2, 1, 5, 3] (ou qualquer outra combinação aleatória).

*/