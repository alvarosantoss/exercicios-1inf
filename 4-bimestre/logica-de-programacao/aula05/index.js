const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos dias? "))

let totalProduzido=0

for(dia=1; dia<=dias; dia++){
    const producao= Number(prompt(`Produção do dia ${dia}: `))
    totalProduzido= totalProduzido+ producao
}
console.log(totalProduzido)
module.exports = totalProduzido