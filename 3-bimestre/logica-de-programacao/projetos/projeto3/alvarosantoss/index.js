const nome= "Rodrigo Nunes"
const idade= 24
const categoria="comum"
const possuiIngresso= true
const impedido= false
const valorIngresso= 80
const valorPago= 100

let acessoStatus=1
let idadeStatus=1
let nivelAcesso=1
let pagamentoStatus=1
let statusPortao=1

if(idade>=18){
    idadeStatus="Idade permitida"
}else{
    idadeStatus="Idade não permitida"
}
if(
    categoria=== "organizador" ||
    categoria=== "staff"){
        nivelAcesso="Acesso administrativo liberado"
    }else{
        nivelAcesso="Acesso comum"
    }
    if(idade>=18&&possuiIngresso===true&&impedido!=true){
        acessoStatus="Acesso liberado"
    }else{
        acessoStatus="Acesso negado"
    }
    if(valorPago>=valorIngresso){
        pagamentoStatus="Pagamento aprovado"
    }else{
        pagamentoStatus="Pagamento insuficiente"
    }
    const troco= valorPago-valorIngresso
    if(acessoStatus==="Acesso liberado"&&pagamentoStatus==="Pagamento aprovado"){
        statusPortao="Entrada no estádio confirmada"
    }else{
        statusPortao="Entrada no estádio não confirmada"
    }
    const resumo=`nome do torcedor:${nome}
    categoria:${categoria}
    nivel de acesso:${nivelAcesso}
    valor do ingresso:R$ ${valorIngresso}
    valor pago:R$ ${valorPago}
    troco:R$ ${troco}
    situação do acesso:${acessoStatus}
    situação do pagamento:${pagamentoStatus}
    situação final:${statusPortao}
    `
    console.log(resumo)
    
    module.exports = {
    nome,
    idade,
    categoria,
    possuiIngresso,
    impedido,
    valorIngresso,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusPortao,
    resumo
}