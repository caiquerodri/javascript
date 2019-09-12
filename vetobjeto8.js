function vetobjeto8(){
    var estados = []
    cadastroEstados(estados)
    calculaIndices(estados)
    calculaPercentual(estados)
    calculaMedia(estados)
}
function cadastroEstados(estados){
    for(var i = 0; i<3;i++){
        var objeto = {}
        objeto.nome = prompt("Informe o nome do Estado")
        objeto.veiculos = Number(prompt("Informe o número de veículos"))
        objeto.acidentes = Number(prompt("Informe o número de acidentes"))
        objeto.indice = (objeto.acidentes/objeto.veiculos)*100
        estados.push(objeto)
    }
}
function calculaIndices(estados){
    var maiorIndice = estados[0].indice
    var maiorEstado = estados[0].nome
    var menorIndice = estados[0].indice
    var menorEstado = estados[0].nome
    for(i=0;i<3;i++){
        if (estados[i].indice > maiorIndice){
            maiorIndice = estados[i].indice
            maiorEstado = estados[i].nome
        }
        if (estados[i].indice < menorIndice){
            menorIndice = estados[i].indice
            menorEstado = estados[i].nome
        }
    }
    alert(`Maior índice ${maiorIndice} com nome ${maiorEstado}`)
    alert(`Menor índice ${menorIndice} com nome ${menorEstado}`)
}
function calculaPercentual(estados){
    var total = 0;
    for(var i=0;i<3;i++){
        total = total + estados[i].veiculos
    }
    for(var i=0;i<3;i++){
        alert((estados[i].veiculos/total)*100)
    }    
}

function calculaMedia(estados){
    var total = 0;
    for(var i=0;i<3;i++){
        total = total + estados[i].acidentes
    }
    alert(`Média de acidentes ${total/3}`)
}