const cliente= "Marina Alves"
const produto="Monitor 24 polegadas"
const preco= 800
const quantidade= 2
const estoque= 10
const valorPago= 2000
const subtotal= quantidade * preco


let estoqueDisponivel="Aguardando"


if (estoque>=quantidade) {
    estoqueDisponivel="Estoque suficiente"
}else{
    estoqueDisponivel="Estoque insuficiente"
}
let freteStatus
if (subtotal>=1000){
    freteStatus="Frete grátis"
}else{
    freteStatus="Frete:R$30"
}

const valorFrete=0
const valorFinal= subtotal + valorFrete

let pagamentoStatus

if (valorPago>=valorFinal) {
    pagamentoStatus="Pagamento aprovado"
} else{
    pagamentoStatus="Pagamento insuficiente"
}

const troco= valorPago-valorFinal
let statusCompra

if (estoqueDisponivel==="Estoque suficiente"&&pagamentoStatus==="Pagamento aprovado"){
    statusCompra="Compra confirmada"
} 
if (estoqueDisponivel==="Estoque suficiente"&&pagamento==="Pagamento insuficiente"){
=======
let statusCompra

if (estoqueDisponivel==="Estoque suficiente"&&pagamentoStatus==="Pagamento aprovado"){
    statusCompra="Compra confirmada"
} 
if (estoqueDisponivel==="Estoque suficiente"&&pagamentoStatus==="Pagamento insuficiente"){
>>>>>>> 92aaa3f (projeto finalizado)
    statusCompra="Compra pendente de pagamento"
}
if(estoqueDisponivel==="Estoque insuficiente"){
    statusCompra="Compra não pode ser confirmada por falta de estoque"
}   
const resumo=
`cliente;${cliente}
produto;${produto}
preço;${preco}
quantidade;${quantidade}
estoque;${estoque}
valor pago;${valorPago}
subtotal;${subtotal}
verificação de estoque;${estoqueDisponivel}
frete;${valorFrete}
verificação do frete=;${freteStatus}
valor final;${valorFinal}
verificação de pagamento;${pagamentoStatus}
troco;${troco}
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
    freteStatus,
    valorFrete,
    valorFinal,
    pagamentoStatus,
    troco,
    statusCompra,
    resumo
}
