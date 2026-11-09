const prompt = require("prompt-sync")()

const limiteEstoqueBaixo = Number(prompt("Limite de estoque baixo: "))
const quantidade= Number(prompt("Quantidade de produtos:"))
const catalogo = []

for (let i = 1; i <= quantidade; i++) {
  const produto = {
    nome: prompt(`Nome do produto ${i}: `),
    preco: Number(prompt(`Preço do produto ${i}: `)),
    estoque: Number(prompt(`Estoque do produto ${i}:`))
  }
  catalogo.push(produto)
}
let nomeReajuste= prompt("Nome do produto para reajuste:")
let aumento= Number(prompt("Valor do aumento:"))

for(let i=0;i< catalogo.length;i++){
    if(catalogo[i].nome===nomeReajuste){
        catalogo[i].preco += aumento
    }
}

let produtoMaisCaro= catalogo[0]
 
for(let i= 0;i<catalogo.length;i++){
    if(catalogo[i].preco >produtoMaisCaro.preco){
        produtoMaisCaro= catalogo[i]
    }
}
produtoMaisCaro= produtoMaisCaro.nome

let estoqueTotal=0

for (let i = 0; i < catalogo.length; i++) {
  estoqueTotal = estoqueTotal + catalogo[i].estoque
}

let produtosComEstoqueBaixo= 0


for (let i = 0; i < catalogo.length; i++) {
  if (catalogo[i].estoque <=limiteEstoqueBaixo) {
    produtosComEstoqueBaixo++
  }
}

const resumo=`
produto mais caro;${produtoMaisCaro}
total do estoque; ${estoqueTotal}
produtos com estoque baixo; ${produtosComEstoqueBaixo}
`
console.log(resumo)
module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}