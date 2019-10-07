function exmod2(){
    var horas = Number(prompt("Informe as horas"));
    var minutos = Number(prompt("Informe as minutos"));
    var segundos = Number(prompt("Informe as segundos"));    
    var resultado = exe2_2(horas, minutos, segundos);
    alert(resultado)
}
function exe2_2(horas, minutos, segundos){
    return horas*3600 + minutos*60 + segundos
}
