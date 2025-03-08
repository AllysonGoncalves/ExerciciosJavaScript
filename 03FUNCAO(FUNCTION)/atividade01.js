/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 (Exercícios Básicos)
Crie uma função chamada saudacao() que exiba "Olá, mundo!" no console.
*/
function saudacao1() {
    console.log("Olá, mundo!");
}

saudacao1(); // Chama a função e exibe "Olá, mundo!" no console

/*
Explicação:
A função saudacao() usa console.log() para exibir a mensagem "Olá, mundo!".
Quando chamamos saudacao(), a mensagem será exibida no console.
Saída esperada: "Olá, mundo!"*/


//TESTE FUNÇÃO
  function saudacao(nome){
    console.log(`Ola, ${nome}!`)
  }
  saudacao('Maria')
  saudacao('Jose')
