const cliente= "Lucas Almeida"
const produto= "Notebook Gamer"
const preco= 4500
const quantidade= 2
const valorPago= 9000
const subtotal= (quantidade*preco)
const descontoPercentual= "10%"
const valorDesconto=(subtotal*descontoPercentual/100)
const valorFinal=(subtotal-valorDesconto)
const troco= (valorPago-valorFinal)

if(quantidade>=2) {
    console.log("Estoque Disponivel")

} else{
    console.log("Estoque Indisponivel")
}
if (preco>=1000){
    console.log("10%")
    
} else{
    console.log("0%")
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
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}