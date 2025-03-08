/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 22. 

Faça um script para calcular o quadrado de um número informado pelo usuario.
*/

//USANDO O WHILE

let numeroo

while (true){
    numeroo = Number(prompt('Digite um número: '))

    if (!isNaN(numeroo)){
        break// para parar o loop
    }
    alert('Inválido! Por favor, digite um número.')
}
//Math.pow = base e expoente
let quadradooo = Math.pow(numeroo, 2)// numero² ou numeroo ** 2
alert(`O quadrado do número ${numeroo} = ${quadradooo}`)


/*let numero 

while (true) {
    numero = Number(prompt('Digite um número'))

    //A função isNaN() verifica se um valor não é um número.
    //O !(negação) inverte o valor de isNaN(num1).
    if (!isNaN(numero)) {// true  (porque negamos o false) ou seja,
        break // Sai do loop se for um número válido
    }

    alert('Inválido! Por favor, digite um número.')
}

let quadradoo = numero * numero
alert(`O quadrado do número ${numero} = ${quadradoo}`)*/


/*Explicação:
Loop infinito (while (true)): Mantém o programa pedindo um número até o usuário fornecer um valor válido.
Condição if (!isNaN(num1)): Se num1 for um número válido, o loop é encerrado com break.
Se o valor for inválido (isNaN(num1)), exibe um alerta e pede o número novamente.*/


/*A função isNaN() verifica se um valor não é um número.

Se o valor não for um número → isNaN(num1) === true
Se for um número → isNaN(num1) === false
Agora, olhe para if (!isNaN(num1)):

O ! (negação) inverte o valor de isNaN(num1).
Se isNaN(num1) for falso (ou seja, se num1 for um número válido), então !isNaN(num1) será verdadeiro e entramos no if.*/



//FORMA MAIS SIMPLES DE RESOLVER


/*let num1 = Number(prompt('Digite um número'))
let quadrado1 = num1 * num1

if(isNaN(num1)){
    alert('Invalido')
}else{   
    alert(`O quadrado do numero ${num1} = ${quadrado1}`)
}   */



/*let num = Number(prompt('Digite um número: '))

let quadrado = num * num

//IsNaN > Se o usuário inserir algo que não seja um número (como letras ou um campo vazio), isNaN(num) detecta isso e exibe uma mensagem apropriada.

if(isNaN(num)){
    alert('Digite novamente...')
}else
    alert(`O quadrado do número ${num} = ${quadrado}`)
    console.log('O quadrado do numero = ' + quadrado)*/


