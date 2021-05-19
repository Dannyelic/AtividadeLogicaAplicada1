// 3 - Crie um algoritmo que leia o valor de um jantar,
//  calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let jantar = 150
let taxaServico = jantar / 100*10
let precoAPagar =  jantar + taxaServico

console.log(`Obrigada pela sua preferênca srª. O jantar lhe custou R$${jantar},00, mais a taxa de serviço de 10%, a sua experiência completa
em nosso restaurante custará R$${precoAPagar},00.`)