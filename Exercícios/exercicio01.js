// 1 - Solicite o preço de uma mercadoria e o percentual de desconto. 
// Exiba no console o valor do desconto e o preço a pagar.

let mercadoria = 100
let descontoMercadoria = mercadoria / 100*10
let precoAPagar =  mercadoria - descontoMercadoria

if(mercadoria >= 100) {
    console.log(`Você receberá um desconto de R$${descontoMercadoria} e irá pagar R$${precoAPagar} na sua mercadoria.`)
}else {
    console.log("Você não receberá o desconto.")
}