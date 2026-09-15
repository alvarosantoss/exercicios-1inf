const cliente= "Marina Silva"
const produto="Monitor 24 polegadas"
const preco= 800
const quantidade= 2
const estoque= 10
const valorPago= 2000
const subtotal= quantidade * preco



if (estoque>=quantidade) {
    console.log("Estoque Suficiente")
}else{
    console.log("Estoque insuficiente")
}
if (subtotal>=1000){
    console.log("Frete gratis")
}else{
    console.log("Frete:R$30")
}

let frete= 0
const valorFinal= subtotal + frete
let pagamentoStatus="Aguardando"
let statusCompra="Aguardando"

if (valorPago>=valorFinal) {
    console.log("Pagamento aprovado")
} else{
    console.log("Pagamento insuficiente")
}

const troco= valorPago-valorFinal

const estoqueDisponivel= true
const pagamento= true

if (estoqueDisponivel&&pagamento){
    console.log("Compra confirmada")
}else{
    
}

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
