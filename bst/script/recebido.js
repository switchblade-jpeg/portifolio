window.onload = function() {
   
    const urlParams = new URLSearchParams(window.location.search);

    const nomes = urlParams.get('nomeEmail');  
    const email = urlParams.get('enderecoEmail');
    const menssagem = urlParams.get('menssagemEmail');
    

    
    document.getElementById('nomes').textContent = nomes;
    document.getElementById('email').textContent = email;
    document.getElementById('menssagem').textContent = menssagem;
}