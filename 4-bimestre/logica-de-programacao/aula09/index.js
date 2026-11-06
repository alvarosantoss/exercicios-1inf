const prompt = require("prompt-sync")()

const vendasRegistradas = Number(prompt("Quantas vendas serão registradas? "))
const vendas = []

for (let i = 1; i <= vendasRegistradas; i++) {
  const venda = Number(prompt(`Venda ${i}: `))
  vendas.push(venda)
}

let menorVenda = vendas[0]

for (let i = 0; i < vendas.length; i++) {
  if (vendas[i] < menorVenda) {
    menorVenda = vendas[i]
  }
}

console.log(menorVenda)
module.exports = menorVenda