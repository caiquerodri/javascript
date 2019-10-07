var linhas = Number(prompt("Qts linhas"))
var colunas = Number(prompt("Qts colunas"))
var mat = []
var vet = []
for(var i=0;i<linhas;i++){
    vet.push(prompt("Informe nome"))
    mat[i] = []
    for(var j=0;j<colunas;j++){
        mat[i][j] = Number(prompt("Informe nota " + j));
    }
}
var soma
for(var i=0;i<linhas;i++){
    soma = 0
    for(var j=0;j<colunas;j++){
        soma += mat[i][j]
    }
    if (soma / colunas >= 6){
        alert(`Aluno ${vet[i]} foi aprovado com ${soma/colunas}`)
    }
    else if (soma / colunas >= 3){
        alert(`Aluno ${vet[i]} foi para exame com ${soma/colunas}`)
    }    
    else {
        alert(`Aluno ${vet[i]} reprovado com ${soma/colunas}`)
    }    
}