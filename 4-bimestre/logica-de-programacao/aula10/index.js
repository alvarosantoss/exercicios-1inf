const prompt = require("prompt-sync")()
const produtos = []

for (let i = 1; i <= i; i++) {
  const produto = {
    nome: prompt(`Nome do produto : `),
    preco: Number(prompt(`Preço do produto : `))
    estoque: Number(prompt(`Qual o estoque do produto`))
  }

  produtos.push(produto)
}