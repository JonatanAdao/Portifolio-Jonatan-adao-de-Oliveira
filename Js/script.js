function sendToWhatsApp(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    let telefone = "5521975925864"; // Substitua pelo seu número com DDD, ex: 5511999999999

    let texto = `Olá! Meu nome é ${nome}.%0AEmail: ${email}%0AMensagem: ${mensagem}`;
    let url = `https://api.whatsapp.com/send?phone=${telefone}?text=${texto}`;

    window.open(url, "_blank");
}