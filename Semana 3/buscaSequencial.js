function buscaSequencial(vetor, buscado) {
    var encontrado = false;
    var posicao;
    var comparacoes = 0;

    if (vetor.length === 100) { 
        for (var i = 0; i < vetor.length; i++) {
            comparacoes++;
            if (vetor[i] === buscado) {
                encontrado = true;
                posicao = i;
                break; 
            }
        }

        if (encontrado) {
            alert("O número " + buscado + " foi encontrado na posição " + posicao + " após " + comparacoes + " comparações.");
        } else {
            alert("O número " + buscado + " não existe nesse vetor! Foram feitas " + comparacoes + " comparações.");
        }
    } else {
        console.log("Apenas vetores com 100 posições são aceitos!");
    }
}