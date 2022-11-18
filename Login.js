/* 
1. Crie uma função que solicite dois valores ao usuário, um nome e uma senha e
guarde cada um no seu respectivo array.
2. Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer
login, excluir um cadastro ou encerrar o programa. Essa função deve retornar a
opção escolhida pelo usuário.
3. Crie uma função de login e recebe dois valores como parâmetro, um nome e uma
senha, depois procure o nome recebido no array de nomes e em caso positivo
compare a senha no array de senhas. Se as duas comparações forem válidas
retorne true se uma delas não for válida retorne false.
4. Crie uma função de exclusão de cadastro que recebe um nome como parâmetro,
então procure pelo nome no array de nomes e exclua ele e a senha correspondente
do outro varray, por fim organize o array para eliminar os espaços vazios.
5. Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere
que o usuário pode escolher quando encerrar o programa conforme as opções e
que no login caso seja bem sucedido retorna uma mensagem “Login feito com
sucesso!” e em caso negativo “Nome ou senha incorretos!” 
*/

let nomes = []
let senhas = []
let nomeSup = []
let senhaSup = []
let indexSup = 0
let index = 0

let indexCadastro = 0

function Cadastro() {

    nomes.push(prompt("Insira um nome de usuário:"))
    senhas.push(prompt("Insira uma senha: "))
    indexCadastro++
}

function DesejaFazer(){
    let opcao = prompt("Insira o que deseja fazer: 1 - Cadastrar, 2 - Login, 3 - Excluir Cadastro, 4 - Encerrar programa")

    return opcao
}

function login(nome, senha){
   if(nomes.includes(nome)){
        let index = nomes.indexOf(nome)
        if(senha == senhas[index]){
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function ExcluirCadastro(nome){
    let nomesSup = []
    let senhasSup = []
    let indexSup = 0
    let index = nomes.indexOf(nome)
    nomes[index] = 0
    nomes.forEach(x => {
        if(x != 0) {
            let indexX = nomes.indexOf(x)
            nomesSup[indexSup] = x
            senhasSup[indexSup] = senhas[indexX]
            indexSup++
        }
    })

    nomes = nomeSup
    senhas = senhasSup
}

let encerrar = true

do{
    switch(DesejaFazer()){
        case "1":
            Cadastro()
            console.log("Cadastro realizado com sucesso!")
            break
        case "2":
            let nome = prompt("Insira o seu login")
            let senha = prompt("Insira sua senha")
            if(login(nome, senha)) {
                console.log("Login realizado com sucesso!")
            }else {
                console.log("Nome ou senha incorretos!")
            }
            break
        case "3":
            let nomeExcluir = prompt("Insira o login que deseja excluir!")
            ExcluirCadastro(nomeExcluir)
            console.log("Cadastro Excluido com sucesso!")
            break
        case "4":
            console.log("Programa encerrado!")
            encerrar = false
            break
        default:
            console.log("Opção incorreta, escolha novamente!")
    }
} while(encerrar)