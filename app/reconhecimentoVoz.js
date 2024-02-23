const elementoChute = document.getElementById('chute');

window.SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;


window.recognition = new SpeechRecognition();
window.recognition.lang = 'pt-Br';
window.recognition.start();


window.recognition.addEventListener('result', onSpeak)
    

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChute(chute);
    verificaChute(chute);
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div>Você Disse</div>
        <span class="box">${chute}</span>
    `;
}

