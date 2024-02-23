const maiorValor = 100;
const menorValor = 0;
const numSecreto = gerarNumAleatorio();


function gerarNumAleatorio() {
    return Math.round(Math.random() * maiorValor);
}

console.log(numSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor