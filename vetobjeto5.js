function Exe5(){
    var vet = []
    for(var j=0;j<5;j++){
        var objeto = {}
        // Coloca dados no objeto
        objeto.codigo = Number (prompt("Codigo"))
        objeto.nome = Number (prompt("Descrição"))
        objeto.qtde = Number (prompt("Qtde"))
        objeto.preco = Number (prompt("Preço"))
        // Coloca obejto no vetor ordenado
        for(var i=0;i<vet.length;i++){ // varre o vetor
            if(objeto.codigo < vet[i].codigo){ // procura por um elemento maior
                vet.splice(i, 0, objeto); // adiciona em ordem
                alert("Adicionado com sucesso")
                break; // Sai do laço
            }
        }
        if (i == vet.length){ // para adicionar o codigo na ultima posiçao do vetor
            vet.push(objeto);
            alert("Adicionado com sucesso")
        }
    }
    // permite o usuario alterar os valores
    var cod = Number(prompt("Informe o codigo"))
    for(var i=0;i<5;i++){
        if (cod ==vet[i].codigo){
            vet[i].descricao = prompt("Descrição")
            vet[i].qtde = Number(prompt("Qtde"))
            vet[i].preco = Number(prompt("Preço"))
            break; // sai do for
        }
    }
    if (i == 5){
        alert("Produto não existe")
    }
    for(var i=0;i<vet.length;i++){
        alert(vet[i].codigo + " " + vet[i].descricao + " " +vet[i].preco + " " + vet[i].qtde)
    }

}