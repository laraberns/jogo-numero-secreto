//constante da div chute
const elementoChute = document.getElementById('chute')

//API do web speech
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br"
//start no recognition
recognition.start()

//aparecer o resultado do recognition
recognition.addEventListener("result", onSpeak)

//funcao para pegar o resultado do recognition e transcrever
function onSpeak(e) {
    const chute = e.results[0][0].transcript
    exibeChutenaTela(chute)
    verificarSeOChutePossuiValorValido(chute)
}

//funcao para pegar o resultado do recognition e alterar html da div chute com o resultado na tela
function exibeChutenaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

//quando funcao acabar, liga mais uma vez reconhecimento de voz
recognition.addEventListener('end', () => recognition.start())