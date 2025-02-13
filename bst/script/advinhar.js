let maiorMostrado = 100;
let menorMostrado = 0;
let tentativas = 0;
let resposta =  Math.floor(Math.random() * 100 + 1);
const maior = document.getElementById('maior');
const menor = document.getElementById('menor');
const resultado = document.getElementById('resultado');
const inputAdv = document.getElementById('input-adv');
const advinharBtn = document.getElementById('adivinhar');
const jogarNovoBtn = document.getElementById('jogar-novo');


function advinhar() {

    let advinho = parseFloat(inputAdv.value);


    if (advinho === resposta) {
        tentativas += 1;
        maior.innerText = "";
        menor.innerText = "";
        resultado.innerText = `Parabéns, você venceu! A resposta era ${resposta} e você teve ${tentativas} tentativas.`;

       
        inputAdv.style.display = "none";
        advinharBtn.style.display = "none";
        

    } else {
        tentativas += 1;

       
        if (advinho > resposta) {
            if (advinho < maiorMostrado && advinho > menorMostrado) {
                maiorMostrado = advinho;
            }
            maior.innerText = `< ${advinho}`;
        } else {
            if (advinho > menorMostrado && advinho < maiorMostrado) {
                menorMostrado = advinho;
            }
            menor.innerText = `${advinho} <`;
        }
    }
}


function jogarNovo() {
    maiorMostrado = 100;
    menorMostrado = 0;
    tentativas = 0;
    resposta = Math.floor(Math.random() * 100 + 1); 
    maior.innerText = "< 100";
    menor.innerText = "0 <";
    resultado.innerText = "";
    inputAdv.style.display = "block";
    advinharBtn.style.display = "block";
    jogarNovoBtn.style.display = "none";
    inputAdv.value = ""; 
}
