// 10 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

    function maioridade(){

        let anoNascimento = 2000
        let idadeAtual = 2021 - anoNascimento  

        if(idadeAtual >= 18){
            return "Você é maior de idade!"
        } else{
                return "Você é menor de idade!"    
        }
    }
    
    console.log(maioridade())