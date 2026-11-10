const prompt = require("prompt-sync")()
const precoUnitario= Number(prompt("Preço unitário: "))
const quantidade= Number(prompt("Quantidade: "))
const formaPagamento= prompt("Forma de pagamento: ")

const calcularSubtotal = (precoUnitario, quantidade) => {
  return precoUnitario * quantidade
}

const subtotal= calcularSubtotal(precoUnitario, quantidade)



function calcularFrete(subtotal){
    if(subtotal>=100){
        return 0
    }else{
        return 10
    }
}
const frete= calcularFrete(subtotal)



function calcularDesconto(subtotal, formaPagamento){
    let percentual= 0

     switch (formaPagamento) {
        case "pix":
            percentual = 5
            break

        case "dinheiro":
            percentual = 5
            break

        case "cartao":
            percentual= 0
            break
    }
    return subtotal*percentual/100
}
const desconto= calcularDesconto(subtotal, formaPagamento)




function calcularTotal(precoUnitario, quantidade, formaPagamento){
    const subtotal = calcularSubtotal(precoUnitario, quantidade)

    const frete = calcularFrete(subtotal)

    const desconto = calcularDesconto(subtotal, formaPagamento)

    const total = subtotal - desconto + frete

    return total
}
const total= calcularTotal(precoUnitario, quantidade, formaPagamento)


const resumo=`
======RESUMO DO PEDIDO=======
subtotal; ${subtotal}
frete; ${frete}
desconto; ${desconto}
total do pedido; ${total}
`
console.log(resumo)
module.exports = {
    precoUnitario,
    quantidade,
    formaPagamento,
    calcularSubtotal,
    calcularFrete,
    calcularDesconto,
    calcularTotal,
    subtotal,
    frete,
    desconto,
    total,
    resumo
}