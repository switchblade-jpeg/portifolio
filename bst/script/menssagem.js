function handleSubmit(event) {
    event.preventDefault();
    const nomeEmail = document.getElementById("nomeEmail").value;
    const enderecoEmail = document.getElementById("enderecoEmail").value;
    const menssagemEmail = document.getElementById('menssagemEmail').value;
    window.location.href = `recebido.html?nomeEmail=${encodeURIComponent(nomeEmail)}&enderecoEmail=${encodeURIComponent(enderecoEmail)}&menssagemEmail=${encodeURIComponent(menssagemEmail)}`


}