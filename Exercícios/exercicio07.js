// 7 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles,
//  se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let n1 = 100
let n2 = 50

function maior(n1,n2){
    if(n1 > n2){
        return n1
    } else if (n1 < n2){
        return n2
    } else{
        return "Os números são iguais!"
    }
}
    
console.log(maior(n1,n2))