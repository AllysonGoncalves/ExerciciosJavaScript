/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 (Exercícios Básicos)
Ex: 04.
Crie uma função chamada somar(a, b) que recebe dois números e retorna a soma deles.
Essa função recebe dois números como parâmetros e retorna a soma deles.*/

function somar(a, b) {
    return a + b // Soma os dois números e retorna o resultado
  }
  
  // Testando a função
  console.log('ADIÇÃO')
  console.log(somar(3, 5)) // Retorna 8
  console.log(somar(10, 20)) // Retorna 30
  console.log(somar(-5, 7)) // Retorna 2
  

  function subtrair(a,b){
    return a - b
  }
  console.log('SUBTRAÇÃO')
  console.log(subtrair(7, 9))
  console.log(subtrair(24, 15))
  console.log(subtrair(31, 26))
  console.log(subtrair(-7, 9))
  console.log(subtrair(-8, -6))
  console.log(subtrair(9, -11))


  function multiplicar(a,b){
    return a * b
  }
console.log('MULTIPLICAÇÃO')
console.log(multiplicar(4, 6))
console.log(multiplicar(2, 9))
console.log(multiplicar(8, 5))
console.log(multiplicar(-3, 6))
console.log(multiplicar(7, -4))
console.log(multiplicar(-5, -9))


function dividir(a, b){
  return a / b
}
console.log('DIVISÃO')
console.log(dividir(75, 15))
console.log(dividir(30, 6))
console.log(dividir(-95, 5))
console.log(dividir(120, -6))
console.log(dividir(-8, 140))
console.log(dividir(-17, -9))



function dividir(a, b) {
  // Verifica se os parâmetros são números
  if (isNaN(a) || isNaN(b)) {
    return "Erro: Por favor, insira apenas números.";
  }
  
  // Verifica se está tentando dividir por zero
  if (b === 0) {
    return "Erro: Divisão por zero não é permitida.";
  }

  // Realiza a divisão e formata para duas casas decimais
  return (a / b).toFixed(2);
}

console.log("DIVISÃO");
console.log(dividir(75, 15));   // 5.00
console.log(dividir(30, 6));    // 5.00
console.log(dividir(-95, 5));   // -19.00
console.log(dividir(120, -6));  // -20.00
console.log(dividir(-8, 140));  // -0.06
console.log(dividir(-17, -9));  // 1.89
console.log(dividir("abc", 5)); // Erro: Por favor, insira apenas números.
console.log(dividir(10, "x"));  // Erro: Por favor, insira apenas números.
console.log(dividir(10, 0));    // Erro: Divisão por zero não é permitida.
