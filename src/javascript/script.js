const visor = document.getElementById("visor");

// Adiciona valor ao visor
function adicionar(valor) {
    visor.value += valor;
}

// Limpa o visor
function limpar() {
    visor.value = "";
}

// Calcula o resultado
function calcular() {
    if (visor.value === "") return;

    try {
        visor.value = eval(visor.value);
    } catch {
        visor.value = "Erro";
    }
}

// Evento dos botões
document.querySelectorAll(".botoes").forEach(botao => {
    botao.addEventListener("click", () => {
        const valor = botao.dataset.valor;
        const acao = botao.dataset.acao;

        if (valor) {
            adicionar(valor);
        }

        if (acao === "limpar") {
            limpar();
        }

        if (acao === "calcular") {
            calcular();
        }
    });
});