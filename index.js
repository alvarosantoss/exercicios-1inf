const cliente= "Lucas Almeida"
const produto= "Notebook Gamer"
const preco= 4500
const quantidade= 2
const estoque= 10
const subtotal= preco * quantidade
const valorPago= 9000
const desconto="10%"
let descontoPercentual= 0
if (subtotal>=1000) {
    descontoPercentual= 10
}
const valorDesconto=(subtotal*descontoPercentual/100)
const valorFinal=(subtotal-valorDesconto)

let troco= "Aguardando"
let statusPedido= "Aguardando"
let pagamentoStatus="Arguadando"
let estoqueDisponivel="Aguardando"

if (estoque>=quantidade) {
    statusPedido="Pedido disponível para finalização"
    estoqueDisponivel= "Estoque Disponivel"
} else{
    statusPedido="Pedido não pode ser finalizado por falta de estoque"
    estoqueDisponivel="Indisponível"
}
if (valorPago>=valorFinal) {
    pagamentoStatus= "pagamento aprovado"
    troco= (valorPago-valorFinal)
} else{
    pagamentoStatus= "Pagamento insuficiente"
    troco= 0
}

const resumo= `cliente;${cliente}
produto;${produto}
preço;${preco}
quantidade;${quantidade}
subtotal;${subtotal}
desconto;${desconto}
valor do desconto;${valorDesconto}
valor final;${valorFinal}
situação do estoque;${estoqueDisponivel}
valor pago;${valorPago}
situação de pagamento;${pagamentoStatus}
troco;${troco}
situação do pedido;${statusPedido}`

console.log(resumo)

module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}