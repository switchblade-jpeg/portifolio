const caixa3 = document.getElementById('caixa-pergunta3');
const caixa1 = document.getElementById('caixa-pergunta1');
const caixa2 = document.getElementById('caixa-pergunta2');
const caixa4 = document.getElementById('caixa-pergunta4');
const caixa5 = document.getElementById('caixa-pergunta5');
const final = document.getElementById('final');
const resultado = document.getElementById('resultado');
let acertos = 0;

function errado(numQuest) {
    if(numQuest == 1) {
        caixa1.style.display = "none";
        caixa2.style.display = "block";
    } else if(numQuest == 2) {
        caixa2.style.display = "none";
        caixa3.style.display = "block";
    } else if(numQuest == 3) {
        caixa3.style.display = "none";
        caixa4.style.display = "block";
    } else if(numQuest == 4) {
        caixa4.style.display = "none";
        caixa5.style.display = "block";
    } else if(numQuest == 5) {
        caixa5.style.display = "none";
        final.style.display = "block";
        resultado.innerText = acertos + "/5";     
    }
}

function certo(numQuest) {
    if(numQuest == 1) {
        acertos += 1;
        caixa1.style.display = "none";
        caixa2.style.display = "block";
    } else if(numQuest == 2) {
        acertos += 1;
        caixa2.style.display = "none";
        caixa3.style.display = "block";
    } else if(numQuest == 3) {
        acertos += 1;
        caixa3.style.display = "none";
        caixa4.style.display = "block";
    } else if(numQuest == 4) {
        acertos += 1;
        caixa4.style.display = "none";
        caixa5.style.display = "block";
    } else if(numQuest == 5) {
        acertos += 1;
        caixa5.style.display = "none";
        final.style.display = "block";
        resultado.innerText = acertos + "/5";     
    }
}

function jogarNovamente(){
   acertos = 0
   final.style.display = "none"
   caixa1.style.display = 'block'
}
