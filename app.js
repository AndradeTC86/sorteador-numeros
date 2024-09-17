mensagemIncial()

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value)
    let numInicial = parseInt(document.getElementById('de').value)
    let numFinal = parseFloat(document.getElementById('ate').value)

    let sorteados = []
    let numero

    for (let i = 0; i < quantidade; i++){
        numero = sortearNumero(numInicial, numFinal)
        while(sorteados.includes(numero)){
            numero = sortearNumero(numInicial, numFinal)
        }
        sorteados.push(numero)
    }
    let mensagem = `Números sorteados:  ${sorteados}`
    exibirTextoEmTela('resultado', mensagem)
    mudarClasseBotao()
}

function sortearNumero(min, max){
    return Math.floor(Math.random() * (max -min + 1) + min)

}

function exibirTextoEmTela(tag, texto){
    let campo = document.getElementById(tag)
    campo.innerHTML = texto
}

function mensagemIncial(){
    exibirTextoEmTela('resultado', 'Números sorteados:  nenhum até agora')
}

function reiniciar(){
    mensagemIncial()
    limparCampos()
    mudarClasseBotao()
}

function limparCampos(){
    let campos = document.querySelectorAll('input')
    campos.forEach(campo => campo.value = ' ')
}

function mudarClasseBotao(atual, novo){
    let botao = document.getElementById('btn-reiniciar')
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
      } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
      }   
}