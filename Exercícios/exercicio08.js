// 8 - Crie um algoritmo que receba três notas de um aluno, 
// calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado

let nota1 = 10
let nota2 = 1
let nota3 = 5
let media = (nota1 + nota2 + nota3)/3

function media_(nota1, nota2, nota3){
    if(media >= 7){
        return "Parabéns! Você foi aprovado!"
    } else if (media >= 5 && 7){
        return "Atenção, você está na recuperação!"
    } else if (media < 5){
        return "Sinto muito, você foi reprovado."
    } else {
        return "Te espero no próximo ano!"
    }
}

console.log(media_(nota1, nota2, nota3))