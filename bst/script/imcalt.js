function calcularImc() {
    let peso = parseFloat(document.getElementById('pesoalt').value);
    let altura = parseFloat(document.getElementById('alturaalt').value);
    let resultado = document.getElementById('resultadoimc');

   
    if (altura > 5) { 
        altura = altura / 100;
    }

   
    if (peso < 5){
        peso = peso * 100; 
    }

  
    let imc = peso / (altura * altura);
    imc = Math.floor(imc * 10) / 10;
   
    if (imc < 18.5){
        resultado.innerText = "Seu IMC é " + imc + " " + "Seu peso é: Magreza";
    } else if (imc >= 18.5 && imc <= 24.9){
        resultado.innerText = "Seu IMC é " + imc + " " + "Seu peso é: Normal";
    } else if (imc >= 25 && imc <= 29.9){
        resultado.innerText = "Seu IMC é " + imc + " " + "Seu peso é: Sobrepeso";
    } else if (imc >= 30 && imc <= 39.9){
        resultado.innerText = "Seu IMC é " + imc + " " + "Seu peso é: Obesidade";
    } else if (imc >= 40){
        resultado.innerText = "Seu IMC é " + imc + " " + "Seu peso é: Obesidade Grave";
    }

    
 
}
