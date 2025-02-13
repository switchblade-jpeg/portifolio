function calcularImc() {
    let peso = parseFloat(document.getElementById('peso-imc').value);
    let altura = parseFloat(document.getElementById('altura-imc').value);
    let resultado = document.getElementById('resultado-imc');
    let numeroImc = document.getElementById('numero-imc');
    let bola = document.getElementById('bola-imc');

   
    if (altura > 5) { 
        altura = altura / 100;
    }

   
    if (peso < 5){
        peso = peso * 100; 
    }

  
    const imc = peso / (altura * altura);

   
    if (imc < 18.5){
        resultado.innerText = "Seu peso é: Magreza";
    } else if (imc >= 18.5 && imc <= 24.9){
        resultado.innerText = "Seu peso é: Normal";
    } else if (imc >= 25 && imc <= 29.9){
        resultado.innerText = "Seu peso é: Sobrepeso";
    } else if (imc >= 30 && imc <= 39.9){
        resultado.innerText = "Seu peso é: Obesidade";
    } else if (imc >= 40){
        resultado.innerText = "Seu peso é: Obesidade Grave";
    }

    
    numeroImc.innerText = Math.floor(imc * 10) / 10;

   
    let progress = (imc - 10) / 30 * 100;  
    progress = Math.min(progress, 100); 

   
    const barra = document.getElementById("progresso-imc");

    barra.animate(
        [
            { width: '0%' },
            { width: `${progress}%` }
        ],
        {
            duration: 1000, 
            fill: 'forwards' 
        }
    );

   
    bola.animate(
        [
            { transform: 'scale(0)' }, 
            { transform: `scale(${progress / 100})` }
        ],
        {
            duration: 1000, 
            fill: 'forwards' 
        }
    );
}
