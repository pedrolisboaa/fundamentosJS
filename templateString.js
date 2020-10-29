let nome = "Pedro"
let sobrenome = "Lisboa"
let idade = 28

const nomeCompleto = `Ola ${nome} ${sobrenome}!`
const frase = `O ${nome} ${sobrenome} tem ${idade} anos!`
const teste = `o ${upperNome(nome)} é bonito!`
console.log(nomeCompleto)
console.log(frase)
console.log(teste)

function upperNome(nome){
    return nome.toUpperCase()
}