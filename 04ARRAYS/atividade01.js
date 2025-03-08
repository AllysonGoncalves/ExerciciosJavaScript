/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ARRAYS
 (Exercícios Básicos)
Ex: 01.
 Crie um array com 5 números e exiba cada um no console usando um loop.
*/
let numeros = [10, 20, 30, 40, 50]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}


// OU ||

//Versão usando forEach() (mais simples)
// Podemos usar forEach() para percorrer o array sem precisar de um índice.

/*let numeros = [10, 20, 30, 40, 50]

numeros.forEach(numero => {
    console.log(numero)
})
 Aqui, forEach() percorre o array e executa o callback console.log(numero) para cada elemento.

*/
