const menorValor = 1
const maiorValor = 1000
const elementoMenorValor = document.getElementById("menor-valor")
const elementoMaiorValor = document.getElementById("maior-valor")
const numeroSecreto = gerarNumeroAleatorio()

// alterando texto do elemento de maior valor e menor para as variaveis
elementoMenorValor.innerHTML =  menorValor
elementoMaiorValor.innerHTML =  maiorValor

// gera numero aleatorio com base no maiorValor
function gerarNumeroAleatorio() {
    return parseInt(Math.random()* maiorValor + 1)
}

// escreve numeroSecreto no console.log
console.log("O número secreto é",numeroSecreto)

