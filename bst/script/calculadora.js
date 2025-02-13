const visor = document.getElementById("visor");

function adicionar(input){
    visor.value += input

}

function limpar(){
    visor.value = ""
}

function calcular(){
    try{
        visor.value = eval(visor.value)

    } catch(error){
        visor.value = "Erro"

    }
    
    
}