function vetobjeto2() {
    var vet = []
    for( var i=0;i<3;i++){
    var objeto = {}
        // coloca dados no objeto 
        objeto.salario = Number(prompt("Salario"))
        objeto.sexo = prompt("Sexo")
        objeto.idade = Number(prompt("Idade"))
        objeto.filhos = Number(prompt("Filhos"))
        // coloca objeto no vetor
        vet.push(objeto)
    }
    var soma = 0
    var sFilhos = 0
    var maiorSalario = vet[0].salario
    var qtde = 0
    for (var i=0;i<3;i++){
        soma = soma + (vet[i].salario)
        sFilhos = sFilhos + (vet[i].filhos)
        if (vet[i].salario > maiorSalario){
            maiorSalario = vet[i].salario
        }
        if ((vet[i].sexo == 'F') && (vet[i].salario > 1000)){
            qtde++;
        }  
    }

    alert ("Média salarial" + soma/3)
    alert ("Média de filhos" + sFilhos/3)
    alert ("Maior Salário" + maiorSalario)
    alert ("Percentual" + qtde/3*100);
}
    