/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 03.

Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length
*/

let nome = prompt("Digite seu nome: ")
while (nome.length <= 3) {//length em string - Retorna a quantidade de caracteres (incluindo espaços e símbolos).
    nome = prompt("Nome inválido. O nome deve ter mais de 3 caracteres. Digite novamente: ")
}

let idade = parseInt(prompt("Digite sua idade: "))
while (idade < 0 || idade > 150) {
    idade = parseInt(prompt("Idade inválida. A idade deve estar entre 0 e 150. Digite novamente: "))
}

let salario = parseFloat(prompt("Digite seu salário: "))
while (salario <= 0){ 
    salario = parseFloat(prompt("Salário inválido. O salário deve ser maior que zero. Digite novamente: "))
}
  
let sexo = prompt("Digite seu sexo Feminino(F) ou Masculino(M): ").toLowerCase()//converter todas as letras de uma string para minúsculas.
while (sexo !== 'f' && sexo !== 'm') {
    sexo = prompt("Sexo inválido. Digite 'f' para feminino ou 'm' para masculino: ").toLowerCase()
}
let estadoCivil = prompt("Digite seu estado civil:\n Solteiro (S)\n Casado(C) \n Viúvo(V)\n Divorciado(D)\n ").toLowerCase()
while (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd') {
    estadoCivil = prompt("Estado civil inválido. Digite 's', 'c', 'v' ou 'd': ").toLowerCase()
}

alert("Informações validadas com sucesso!")

//nome.length é uma propriedade que retorna o número de caracteres presentes em uma string (sequência de texto). Por exemplo, se você tiver uma variável nome com o valor "João", ao acessar nome.length, o resultado será 4, porque a palavra "João" possui 4 caracteres.


//.toLowerCase() - converte uma string para minúsculas. Ele retorna uma nova string, sem alterar a original.


//Quando usar !==?
//✅ Para evitar erros inesperados ao comparar valores de tipos diferentes
//✅ Quando precisa ter certeza absoluta de que os tipos são iguais
//✅ Quando quer comparar números e strings sem conversões automáticas do JavaScript
/*
!== é um operador de comparação em JavaScript que significa "estritamente diferente" (ou "estritamente não igual").

Como funciona?
Ele compara valor e tipo. Ou seja, retorna true se os valores forem diferentes ou se os tipos forem diferentes. Caso contrário, retorna false.
*/

/*let nome = prompt('Digite o nome do usuario:')
let idade = parseInt(prompt('Digite a idade:'))
let salario = parseFloat(prompt('Informe o salario:'))
let sexo = prompt('Informe o sexo masculino(M) ou feminino(F):')
let estadoCivil = prompt('Informe o estado civil:')*/



/*Resumo
Em strings, length retorna o número de caracteres.
Em arrays, length retorna o número de elementos.
Em arrays, length pode ser usado para cortar ou expandir o array.


Resumo
✅ Use && porque queremos que o loop continue somente se todas as condições forem verdadeiras (ou seja, o valor não está na lista permitida).
❌ Não use ||, pois sempre haverá pelo menos uma comparação retornando true, o que faz com que o loop nunca pare.


*/


