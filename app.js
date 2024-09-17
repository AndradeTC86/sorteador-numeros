mensagemIncial()

function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value)
    let numInicial = parseInt(document.getElementById("de").value)
    let numFinal = parseFloat(document.getElementById("ate").value)

    let sorteados = []
    let numero

    for (let i = 0; i < quantidade; i++){
        numero = sortearNumero(numInicial, numFinal)
        sorteados.push(numero)
    }
    console.log(sorteados)
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

}