const cliente= "Lucas Almeida"
const produto= "Notebook Gamer"
const preco= 4.500
const quantidade= 2
const estoque=10
const valorPago=  9.000
const subtotal= quantidade*preco
const desconto=10
const valorDesconto= (subtotal * desconto)/ 100
const valorFinal= subtotal - valorDesconto
const troco= valorPago - valorFinal

let estoqueDisponivel= 1
let pagamentoStatus= 1
let statusPedido= 1
let descontoPercentual=1

if(quantidade<=estoque){
    estoqueDisponivel="Sim"
}else {
    estoqueDisponivel="Não"
}

if(subtotal>=1000){
    descontoPercentual= 10
}else{
    descontoPercentual= 0 
}


if(valorPago>=valorFinal){
    pagamentoStatus="Pagamento aprovado"
}else{
    pagamentoStatus="Pagamento reprovado"
}

if(quantidade<=estoque){
    statusPedido="Pedido disponível para finalização"
}else{
    statusPedido="Pedido não pode ser finalizado por falta de estoque"
}

const resumo = `Cliente: ${cliente}
Produto: ${produto}
Preço do produto :R$ ${preco}
Quantidade: ${quantidade}
Preço da quantidade solicitada: R$ ${subtotal}
Desconto: ${descontoPercentual}%
Valor do desconto: R$ ${valorDesconto}
Valor final: R$ ${valorFinal}
Situação do estoque: ${estoqueDisponivel}
Valor pago: ${valorPago}
Situação do pagamento: ${pagamentoStatus}
troco:R$ ${troco}
Situação do pedido: ${statusPedido}
`
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
