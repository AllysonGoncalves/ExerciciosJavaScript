/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS

Ex: 13.
Crie um objeto carro com as propriedades marca, modelo e ano.
Use Object.defineProperty() para tornar a propriedade ano somente leitura (não pode ser modificada depois de definida).
Tente alterar a propriedade ano e observe o comportamento.
*/
const carro = {
    marca: 'Ford',
    modelo: 'Fusca'
  };
  
  Object.defineProperty(carro, 'ano', {
    value: 1974,
    writable: false, // Não pode ser modificado
    enumerable: true,
    configurable: true
  });
  
  console.log(carro.ano);  // 1974
  carro.ano = 1980;  // Não vai alterar o valor
  console.log(carro.ano);  // 1974 (permanece o valor original)