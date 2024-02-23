let acerto = false

function  microfone(){
      window.recognition.addEventListener('end', () => {
            if(!acerto){
                window.recognition.start()
            }
        })
}

microfone()

function verificaChute(chute){
    const numero =+ chute;

    if (chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Invalido</div>'
   
        return;
    }

    if (numeroMaiorMenor(numero)){
        elementoChute.innerHTML += `<div>Valor invalído, o número deve estar entre ${menorValor} e ${maiorValor}</div>`

        return;
    }

    if (numero == numSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numSecreto}</h3>
            <button id ="jogar-novamente" class="btn-jogar">jogar novamente</button>
        `
        acerto = true;
 
    } else if (numero > numSecreto) {
            elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`

        }else{
            elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
            
        }
}

function numeroMaiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})

