function funcao() {
    var vet = []
    for( var i=0;i<5;i++){
    var objeto = {}
        // coloca dados no objeto 
        objeto.codigo = Number(prompt("Codigo"))
        objeto.nome = prompt("Nome")
        objeto.qtde = Number(prompt("Qtde"))
        objeto.preco = Number(prompt("Preco"))
        // coloca objeto no vetor
        vet.push(objeto)
    }
    //calcula o estoque
    var estoque = 0
    for (var i=0;i<5;i++){
        estoque = estoque + vet[i].qtde
    }
    alert(" Qtde de estoque " + estoque)
}