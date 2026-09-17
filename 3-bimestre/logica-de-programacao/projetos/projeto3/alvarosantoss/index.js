const nome= "Rodrigo Nunes"
const idade= 24
const categoria=comum
const ingresso= true
const impedido= false
const valorIngresso= 80
const valorPago= 100

if(idade>=18){
    console.log("Idade permitida")
}else{
    console.log("Idade não permitida")
}
if(
    categoria=== "organizador" ||
    categoria=== "staff"){
        console.log("Acesso administrativo liberado")
    }else{
        console.log("Acesso comum")
    }
    if(idade>=18&&ingresso===true&&impedido!=true){
        console.log("Acesso liberado")
    }else{
        console.log("Acesso negado")
    }