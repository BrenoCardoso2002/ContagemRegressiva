const tempo = document.querySelector("h1")
const data = document.querySelector("input")

function contagemRegressiva(){
    if (data.value == ""){
        tempo.innerText = "Tempo restante..."
    }else{
        var contagemData = new Date(data.value).getTime()
        var atual = new Date().getTime()

        var diferenca = contagemData - atual

        if (diferenca <= 0){
            tempo.innerText = "Contagem finalizada!"
        }else{
            var dias = Math.floor(diferenca/(1000*60*60*24))
            var horas = Math.floor((diferenca%(1000*60*60*24)/(1000*60*60)))
            var minutos = Math.floor((diferenca%(1000*60*60))/(1000*60))
            var segundos = Math.floor((diferenca%(1000*60))/1000)
    
            tempo.innerText = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos `
        }
    }
}

setInterval(contagemRegressiva, 1000)