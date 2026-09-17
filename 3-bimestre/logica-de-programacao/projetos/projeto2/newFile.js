const { pagamentoStatus, troco } = require(".");

if (pagamentoStatus === "Pagamento insuficiente") {
    troco = 0;
    console.log(troco);
}
