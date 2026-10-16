const prompt= require("prompt-sync")()

const nomeTurno= prompt("Digite o nome do seu turno:")
const meta= Number(prompt("Digite sua meta de produção:"))
const producaoInicial= Number(prompt("Digite sua produção inicial:"))
const pecasPorCaixa= Number(prompt("Digite a quantidade de peças por caixa:"))
let producaoFinal= producaoInicial
while (producaoFinal< meta){
    producaoFinal++
}
let caixasNecessarias= 0
do{
    caixasNecessarias++
    producaoFinal= producaoFinal- pecasPorCaixa
} while(producaoFinal >0)
producaoFinal= meta


const situacaoMeta= producaoFinal>= meta? "Meta atingida" : "Meta não atingida"

const resumo=`
nome do turno: ${nomeTurno}
produção final: ${producaoFinal}
quantidade de caixas necessarias: ${caixasNecessarias}
situação da meta: ${situacaoMeta}
`
console.log(resumo)

module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}