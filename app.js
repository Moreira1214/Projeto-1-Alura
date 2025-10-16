let listaDeNumeroSorteado = [];
let numeroLimite = 4;
let NumeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', `Escolha um numero de 1 a ${numeroLimite}`);
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == NumeroSecreto); // Verdadeiro ou falso.
    if (chute == NumeroSecreto){
        
        exibirTextoNaTela('h1', 'Voce acertou');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled') // Ativar botão Novo jogo.
    } else {if (chute > NumeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto e menor.');
        } else {
            exibirTextoNaTela('p', 'O numero secreto e maior.');
        } tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    quatidadeDeNemerosNaLista = listaDeNumeroSorteado.length;

    if (quatidadeDeNemerosNaLista == numeroLimite){
        listaDeNumeroSorteado = [];
    }

    if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    NumeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// lista.push('elemento') adiciona
// lista.pop() remove o ultimo elemento na lista