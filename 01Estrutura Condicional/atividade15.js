/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA CONDICIONAL
Ex: 15. 

Faça um programa que leia a idade de um nadador e classifique-o numa das
seguintes categorias abaixo:
• Adulto (idade >= 18);
• Juvenil (idade >= 14);
• Infantil (idade >=9);
• Mirim (Idade < 9).*/

let idade = Number(prompt('Informe sua idade:'))

if (isNaN(idade)){
    alert('invalido, digite numeros')
}else if (idade>= 18){
    alert('Categoria: Adulto')
}else if (idade >= 14){
    alert('Categoria: Juvenil')
}else if (idade >= 9){
    alert('Categoria: Infantil')
}else{
    alert('Categoria: Mirim')
}


/*let idade = Number(prompt('Informe sua idade: '))

if (isNaN(idade)){
    alert('Invalido!')
}else if (idade >= 18){
    alert('Categoria: Adulto')
}else if (idade >= 14){
    alert('Categoria: Juvenil')
}else if (idade >= 9){
    alert('Categoria: Infantil')
}else{
    alert('Categoria: Mirim')
}*/