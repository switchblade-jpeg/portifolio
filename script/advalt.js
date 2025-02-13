let advinho = 0
let resposta = Math.floor(Math.random() * 10 + 1);
tentativas = 0

while(advinho != resposta) {
    tentativas += 1
    advinho = prompt("Faça seu chute")
    if(advinho < resposta) {
        alert("A resposta é maior")
    } else if(advinho > resposta){
        alert("A resposta é menor")
    } else {
        alert("Parabéns! A resposta era " + resposta + ". Você descobriu com " + tentativas + " tentativas!")
    }
}