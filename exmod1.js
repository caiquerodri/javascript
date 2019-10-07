function exmod1(){
    var N = Number(prompt("Informe um numero"));
    var resultado = exe1_1(N);
    alert (resultado)
}
function exe1_1(N){
    var soma = 0
    for(var i=1; i<= N; i++){
        soma = soma + i
    }
    return soma
}
