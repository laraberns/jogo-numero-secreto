
function verificarSeOChutePossuiValorValido(chute) {
    
    //imprime tela de game over se for falado as palavras "game over"
    if(chute === 'game over') {
        document.body.innerHTML = `
        <h2>GAME OVER</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id= "jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        document.body.style.backgroundColor = "#EC3232"
    }
    
    //converte numero em inteiro
    const numero = +chute

    //verifica se numero eh numero mesmo e se nao for aparece mensagem na tela
    if (numeroForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    //verifica se numero eh maior ou menor que o limite e se nao for aparece mensagem na tela
    if (numeroForMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div> O número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    //verifica se eh o numero secreto e se for aparece mensagem na tela - nova mensagem no body e botao para reiniciar jogo
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id= "jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        //aparece mensagem na tela dizendo se numero eh maior ou menor que o secreto
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div> O número secreto é menor <i class="fa-solid fa-arrow-down" style="color: #ffffff;"></i> </div>`
    } else {
        elementoChute.innerHTML += `<div> O número secreto é maior <i class="fa-solid fa-arrow-up" style="color: #ffffff;"></i></i> </div>`
    }

}

//funcao para verificar se valor nao eh numero
function numeroForInvalido(numero) {
    return Number.isNaN(numero)
}

//funcao para verificar se valor eh permitido
function numeroForMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

//evento de click no botao para reiniciar janela
document.body.addEventListener("click", (e) => {
    if (e.target.id == 'jogar-novamente')
    window.location.reload()
})

