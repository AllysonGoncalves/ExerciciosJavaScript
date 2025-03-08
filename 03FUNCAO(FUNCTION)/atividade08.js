/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - FUNCTION
 ( Exercícios Intermediários)
Ex: 08.
Crie uma função compor que recebe duas funções como parâmetros e retorna uma nova função. Essa nova função deve aplicar as duas funções recebidas da esquerda para a direita.
*/
function compor(func1, func2) {
    return function(x) {
      return func2(func1(x));  // Aplica func1 primeiro, depois aplica func2 no resultado de func1
    };
  }
  
  // Exemplo de uso:
  function somar2(x) {
    return x + 2;
  }
  
  function multiplicar3(x) {
    return x * 3;
  }
  
  const somar2EMultiplicar3 = compor(somar2, multiplicar3);
  
  console.log(somar2EMultiplicar3(5));  // (5 + 2) * 3 = 21

  /*
A função compor recebe duas funções, func1 e func2, como argumentos.
A função retornada aplica func1 no valor de entrada x, e o resultado dessa aplicação é passado como argumento para func2.
Portanto, a ordem de aplicação é da esquerda para a direita: func1(x) primeiro e, depois, func2(func1(x)).
Isso é muito útil quando você deseja criar pipelines de funções ou compor funções de maneira funcional.
  */