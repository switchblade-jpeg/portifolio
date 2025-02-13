function calcularAlt() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('escolherOperacao').value;
    
    let resultado

    switch (operacao) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 === 0) {
                document.getElementById('resultadoCalculo').innerText = "Erro";
                return;
            }
            resultado = numero1 / numero2;
            break;
    }

    document.getElementById('resultadoCalculo').innerText = `Resultado: ${resultado}`;
}





    