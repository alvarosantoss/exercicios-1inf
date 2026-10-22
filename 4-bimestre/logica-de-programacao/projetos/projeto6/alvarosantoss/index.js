const prompt = require("prompt-sync")()

const quantidadeDeDias= Number(prompt("Quantidade de dias registrados:"))
const metaDiaria= Number(prompt("Qual a sua meta diária:"))
const metaSemanal= Number(prompt("Qual a sua meta semanal:"))

let totalVendido= 0

for(let dia= 1; dia<=5; dia++){
    const venda= Number(prompt(`Venda do dia ${dia}:`))
    totalVendido= totalVendido + venda
}

const mediaVendas= totalVendido/quantidadeDeDias

let diasAcimaDaMeta= 0
 
for(let dia= 1; dia<=5; dia++){
    const vendas= Number(prompt(`Venda do dia ${dia}:`))
    if(vendas>=metaDiaria){
        diasAcimaDaMeta= diasAcimaDaMeta + vendas
    }
}

let melhorDia= 0 
for (let dia= 1; dia<5; dia++){
    const vendass= Number(prompt(`Venda do dia ${dia}: `))
    if (vendass>> melhorDia){
        melhorDia= vendass
    }
}
console.log(melhorDia)
module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}

