function converter() {
    const temperatura2 = document.getElementById("temperatura-2");
    const temperatura1 = document.getElementById("temperatura-1").value;
    let valorconv1 = parseFloat(temperatura1); // Convert input to a number



    const valorconv1Type = document.getElementById("valor-conv-1").value;
    if (valorconv1Type == "kelvin1") {
        valorconv1 = valorconv1 - 273;
    } else if (valorconv1Type == "Fahrenheit1") {
        valorconv1 = (valorconv1 - 32) * 5 / 9; 
    }

    const valorconv2Type = document.getElementById("valor-conv-2").value;
    if (valorconv2Type == "kelvin2") {
        temperatura2.value = valorconv1 + 273;
    } else if (valorconv2Type == "Fahrenheit2") {
        temperatura2.value = (valorconv1 * 9 / 5) + 32;
        
    }else{
        temperatura2.value = valorconv1
    }
}

function limpar(){
    const temperatura2 = document.getElementById("temperatura-2");
    const temperatura1 = document.getElementById("temperatura-1");
    temperatura1.value = ""
    temperatura2.value = ""
}