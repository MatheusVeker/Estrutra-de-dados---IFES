function buscaBinaria(vetor, buscado) {
    if (vetor.length === 100) {
      let inicio = 0;
      let fim = vetor.length - 1;
      let meio;
      let encontrado = false;
      let comparacoes = 0;
    
      while (inicio <= fim) {
        meio = Math.floor((inicio + fim) / 2);
        comparacoes++;
    
        if (vetor[meio] === buscado) {
          encontrado = true;
          break;
        } else if (vetor[meio] < buscado) {
          inicio = meio + 1;
        } else {
          fim = meio - 1;
        }
      }
    
      if (encontrado) {
        alert("Número " + buscado + " foi encontrado na posição " + meio + " após " + comparacoes + " comparações.");
      } else {
        alert("Número " + buscado + " não existe nesse vetor! Foram feitas " + comparacoes + " comparações.");
      }
    } else {
      console.log("Apenas vetores com 100 posições são aceitos!");
    }
  }