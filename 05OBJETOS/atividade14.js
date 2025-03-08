/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS

Ex: 14.
Crie um objeto dataNascimento com a propriedade data (uma string no formato dd/mm/aaaa).
Crie um método que retorne a data no formato dd de mês de aaaa.
*/
const dataNascimento = {
    data: '24/02/1995',
    formatarData: function() {
      const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ];
      const partes = this.data.split('/');
      return `${partes[0]} de ${meses[parseInt(partes[1]) - 1]} de ${partes[2]}`;
    }
  };
  
  console.log(dataNascimento.formatarData());  // 24 de Fevereiro de 1995