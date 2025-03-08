/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - OBJETOS

Ex: 10.
Crie um objeto carro com as propriedades modelo, marca, e ano.
Verifique se a propriedade ano existe no objeto e se a propriedade cor existe.
Imprima o resultado de ambas as verificações.
*/
const carro = {
    modelo: 'Fusca',
    marca: 'Volkswagen',
    ano: 1974
  };
  
  console.log('ano' in carro);  // true
  console.log('cor' in carro);  // false