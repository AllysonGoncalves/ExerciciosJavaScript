/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS
 (Exercícios avançado)
Ex: 16.
Crie um objeto contagem que mantém a contagem de frutas em estoque. Ele deve ter um método adicionar que incrementa a quantidade de uma fruta, e um método mostrar que exibe as frutas e suas quantidades.
*/
const contagem = {
    frutas: {},
    adicionar: function(nome, quantidade) {
      if (this.frutas[nome]) {
        this.frutas[nome] += quantidade;
      } else {
        this.frutas[nome] = quantidade;
      }
    },
    mostrar: function() {
      for (let fruta in this.frutas) {
        console.log(`${fruta}: ${this.frutas[fruta]}`);
      }
    }
  };
  
  contagem.adicionar('Maçã', 10);
  contagem.adicionar('Banana', 5);
  contagem.adicionar('Maçã', 3);
  contagem.mostrar();  // Maçã: 13, Banana: 5