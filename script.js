function calcularIMC(){
    // obter os valores de peso e altura
    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value)

    // validação de dados

    if (isNaN(peso) || isNaN(altura) || peso <=0 || altura <=0) {
        alert ("Por favor insira valores válidos para peso e altura!")
        return
    }

    // Calculo do IMC
    let imc= peso /(altura*altura)
    
    // classificação do IMC
    let classificacao= ""

    if(imc<18.5){
        classificacao='Abaixo do peso'
    } else if (imc <25) {
        classificacao= 'Peso normal'        
    } else if (imc <30) {
        classificacao= 'Sobressao'
    } else if (imc <35) {
        classificacao= 'Obesidade grau I'
    } else if (imc <40) {
        classificacao= 'Obesidade grau II'
    } else {
        classificacao= 'Obesidade grau III'
    }
    
    //exibir resultado 
    document.getElementById('resultado').textContent=`Seu IMC é: 
    ${imc.toFixed(2)}. Classificação: ${classificacao}`
}