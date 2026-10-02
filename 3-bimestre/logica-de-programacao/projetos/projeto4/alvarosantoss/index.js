const cliente= "Marina Alves"
const opcaoDoCardapio= 4
const quantidade= 4
const formaDePagamento= "Dinheiro"

let statusDoPedido= "Pendente"
let prato= "tapioca"
let valorDoPedido= 0
let precoDoPrato= 0

switch (opcaoDoCardapio){
    case "acai-300ml":
        console.log("Opção inválida")
        precoDoPrato= 14
        break
    case "acai-500":
        console.log("Opção inválida")
        precoDoPrato= 20
        break
    case "vitamina":
        console.log("Opção inválida")
        precoDoPrato= 12
        break
    case "tapioca":
        console.log("Opção inválida")
        precoDoPrato= 10
        break
}
const subtotal= precoDoPrato * quantidade

const freteStatus= subtotal >= 80 ? "frete grátis" : "frete pago"

const frete= subtotal >= 80 ? 0 : 15

switch (formaDePagamento){
    case "Pix":
        console.log("Pagamento via Pix")
        break
    case "Cartão de crédito":
        console.log("Pagamento via cartão de crédito")
        break    
    case "Dinheiro":
        console.log("Pagamento em dinheiro")
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

switch (statusDoPedido){
    case "Pendente":
        console.log("Aguardando pagamento")
        break
    case "Aprovado":
        console.log("Pedido em preparo")
        break
    case "Enviado":
        console.log("Pedido a caminho")
        break
    case "Cancelado":
        console.log("Pedido cancelado")
        break
    default:
        console.log("Status desconhecido")
}
const resumo=`
Resumo do pedido:
Cliente: ${cliente}
Item : ${prato} 
Quantidade: ${quantidade}
Subtotal: ${subtotal}







`
