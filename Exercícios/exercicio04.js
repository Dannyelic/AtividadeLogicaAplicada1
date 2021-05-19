// 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
// assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, 
// sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

const precoDia = 60
const precoKm = 0.15
let kmPercorridos = 70
let diasAluguel = 5

let precoAluguelDia = precoDia * diasAluguel
let precoPorDistancia = kmPercorridos * precoKm
let precoTotal = precoAluguelDia + precoPorDistancia 

console.log(`Obrigado por escolher nossos serviços. O aluguel da BMW X2, custou R$${precoTotal}.`)