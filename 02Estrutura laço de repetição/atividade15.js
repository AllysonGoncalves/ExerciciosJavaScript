/*EXERCICIO - LOGICA DE PROGRAMAÇÃO - ESTRUTURA LAÇO DE REPETIÇÃO
Ex: 15.

Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
*/
// Pedir o número total de eleitores
let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));

// Inicializar variáveis para os votos de cada candidato
let votosCandidato1 = 0;
let votosCandidato2 = 0;
let votosCandidato3 = 0;

// Pedir para cada eleitor votar
for (let i = 1; i <= totalEleitores; i++) {
  let voto = parseInt(prompt(`Eleitor ${i}, digite seu voto (1, 2 ou 3):`));
  
  // Contabilizar votos para cada candidato
  if (voto === 1) {
    votosCandidato1++;
  } else if (voto === 2) {
    votosCandidato2++;
  } else if (voto === 3) {
    votosCandidato3++;
  } else {
    alert("Voto inválido! Voto não contabilizado.");
  }
}

// Mostrar o número de votos de cada candidato
alert(`Votos para o Candidato 1: ${votosCandidato1}`);
alert(`Votos para o Candidato 2: ${votosCandidato2}`);
alert(`Votos para o Candidato 3: ${votosCandidato3}`);