document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    const mensagemErro = document.getElementById("mensagem-erro");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome").valueOf.trim();
            const email = document.getElementById("email").valueOf.trim();
            const mensagem = document.getElementById("mensagem").valueOf.trim();

            if (nome === "" || email === "" || mensagem === "") {
                mensagemErro.textContent = "Por favor, preencha todos os campos obrigatórios.";
                return;
            }

            if (!validarEmail(email)) {
                mensagemErro.textContent = "Por favor, insira um e-mail válido.";
                return;
            }

            mensagemErro.style.color = "green";
            mensagemErro.textContent = "Mensagem enviada com sucesso!";
            form.reset();
        });
    }
});

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}