const cliente= "Marina Alves"
const opcaoMenu= 4
const quantidade= 4
const formaPagamento= "dinheiro"

let statusPedido= "pendente"
let prato= "Aguardando"
let precoUnitario= 0
let pagamentoMensagem= "Aguardando"
let statusMensagem= "Aguardando"

switch (opcaoMenu){
    case 1:
        prato="Açai 300ml"
        precoUnitario= 14
        break
    case 2:
        prato="Açai 500ml"
        precoUnitario= 20
        break
    case 3:
        prato= "Vitamina"
        precoUnitario= 12
        break
    case 4:
        prato= "Tapioca"
        precoUnitario= 10
        break
    default:
        prato= "Opção inválida"
        precoUnitario= 0
}
const subtotal= precoUnitario * quantidade

const freteStatus= subtotal >= 80 ? "Frete grátis" : "Frete pago"

const frete= subtotal >= 80 ? 0 : 15

switch (formaPagamento){
    case "Pix":
        pagamentoMensagem=("Pagamento via Pix")
        break
    case "Cartão de crédito":
        pagamentoMensagem=("Pagamento via cartão de crédito")
        break    
    case "dinheiro":
        pagamentoMensagem=("Pagamento em dinheiro")
        break
}

let descontoPercentual= 0

switch(descontoPercentual){
    case "Pix":
        descontoPercentual= 15
        break
    case "Cartão de crédito":
        descontoPercentual= 15
        break
    case "Dinheiro":
        descontoPercentual= 0
        break
}
const desconto= subtotal * (descontoPercentual / 100)
const total= subtotal - desconto + frete

switch (statusPedido){
    case "pendente":
        statusMensagem= ("Aguardando pagamento")
        break
    case "aprovado":
        statusMensagem= ("Pedido em preparo")
        break
    case "enviado":
        statusMensagem= ("Pedido a caminho")
        break
    case "cancelado":
        statusMensagem= ("Pedido cancelado")
        break
    default:
        statusMensagem= ("Status desconhecido")
}
const resumo=`
cliente: ${cliente}
item : ${prato} 
quantidade: ${quantidade}
subtotal: ${subtotal}
situação do frete: ${freteStatus}
mensagem da forma de pagamento: ${pagamentoMensagem}
desconto: ${desconto}
total: ${total}
situação do pedido: ${statusMensagem}
`
console.log(resumo)

module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}