// par nome/valor
const saudacao = "Opa" // contexto Léxico 1

function exec(){
    let saudacao = "Falaaaa!" // contexto léxico 2
    return saudacao
}   

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: "Pedro",
    idade: 28,
    endereco: {
        condominio: "Ouro Vermelho 2",
        quadra: 3, 
        casa: 18
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)