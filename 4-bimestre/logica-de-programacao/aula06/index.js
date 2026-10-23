const prompt = require("prompt-sync")()

const turnos = Number(prompt("Quantos turnos serão registrados? "))

let turnosAcimaDaMeta = 0
for(let turno=1; turno<=turnos;turno++){
    const pecas= Number(prompt(`Peças do turno ${turno}`))
    if(pecas>15)
        turnosAcimaDaMeta++
}
module.exports = turnosAcimaDaMeta