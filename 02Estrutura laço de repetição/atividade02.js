/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 02. 

Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. */

let nome1 = prompt('Digite o nome do usuário:')
let senha1 = prompt('Digite a senha:')

while (senha1 === nome1){
    alert('Erro! A senha não pode ser igual ao nome do usuário. Digite novamente.')
    nome1 = prompt('Digite o nome do usuario:')
    senha1 = prompt('Digite a senha:')
}
    alert('Usuário cadastrado com sucesso!')


/*let nome = prompt('Informe o nome do usuario:')
let senha = prompt('Digite a senha:')

while (senha === nome){
    alert('Erro! A senha não pode ser igual ao nome do usuário. Digite novamente.')
    nome = prompt('Informe o nome do usuario:')
    senha = (prompt('Digite a senha:'))
}
alert('Usuário cadastrado com sucesso!')*/


//OU ||


//Se você deseja permitir caracteres como ^, ~, e outros caracteres especiais, mas ainda restringir os números, você pode modificar a expressão regular para aceitar uma gama maior de caracteres. Para isso, precisamos ajustar a regex para permitir caracteres especiais adicionais, como acentos, til, circunflexo e outros, mas ainda restringir números.


/*let nome = prompt('Informe o nome do usuário:');
let senha = prompt('Digite a senha:');

// Validação: nome deve conter apenas letras e caracteres especiais permitidos
while (/[^a-zA-ZáéíóúãõâêîôûçÀ-ÿ^~]/.test(nome)) {
    alert('Erro! O nome de usuário só pode conter letras e caracteres especiais permitidos.')
    nome = prompt('Informe o nome do usuário:')
    senha = prompt('Digite a senha:')
}

//Validação: senha não pode ser igual ao nome
while (senha === nome) {
    alert('Erro! A senha não pode ser igual ao nome do usuário. Digite novamente.')
    senha = prompt('Digite a senha:')
}

alert('Usuário cadastrado com sucesso!')*/


/*
1. /[^a-zA-ZáéíóúãõâêîôûçÀ-ÿ^~]/

/ ... /: Delimita a expressão regular.

[^ ... ]: O circunflexo (^) dentro dos colchetes é um "negador". Ele significa "não". Então, a expressão vai procurar por qualquer caractere que não seja o que está dentro dos colchetes.

a-zA-Z: Permite todas as letras minúsculas (a-z) e todas as letras maiúsculas (A-Z).
áéíóúãõâêîôûç: Permite letras acentuadas e com til, como á, ç, ã, etc.

À-ÿ: Permite caracteres com acento e símbolos de outros idiomas, permitindo letras de À a ÿ, que cobre letras com acento, til, etc.

^~: Permite os caracteres especiais ^ e ~ especificamente.

2. .test(nome)

O método .test() executa a validação. Ele verifica se a expressão regular encontra qualquer caractere não permitido dentro da variável nome.

Retorna true: Se encontrar qualquer caractere que não seja uma letra ou o caractere especial permitido.

Retorna false: Se todos os caracteres do nome forem válidos de acordo com a regex.
*/


//IsNaN > Se o usuário inserir algo que não seja um número (como letras ou um campo vazio).
//replace('.', ',') substitui o ponto por vírgula

/*let nome = prompt('Informe o nome do usuario:')
let senha1 = Number(prompt('Digite a senha:'))

while (isNaN(senha1) || senha1 === "") { // Verifica se é um número válido
    alert('Erro! A senha deve ser um número válido. Digite novamente.')
    let nome = prompt('Informe o nome do usuario:')
    senha1 = prompt('Digite a senha:')
}

alert('Usuário cadastrado com sucesso!')*/

/*senha === "" do código serve para verificar se o valor da variável senha é uma string vazia. Uma string vazia é simplesmente uma string que não contém nenhum caractere (ou seja, "").
*/

