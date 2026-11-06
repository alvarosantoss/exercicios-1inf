const prompt = require("prompt-sync")()

const vendasResgistradas = Number(prompt("Quantas vendas serão resgistradas? "))
const vendas = []

for (let i = 1; i <= vendasResgistradas; i++) {
  vendas.push(Number(prompt(`Venda ${i}: `)))
}

let menorVenda = vendas[0]

for (let i = 0; i < vendas.length; i++) {
  if (vendas[i] < menorVenda) {
    menorVenda = vendas[i]
  }
}

console.log(menorVenda)
module.exports= menorVenda