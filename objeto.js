const produto1 = {}

produto1.nome = "Celular"
produto1.preco = 900
produto1.quantidadeEstoque = 10
produto1.valorTotal = valorEstoque(produto1.preco, produto1.quantidadeEstoque)

console.log(produto1)


const produto2 = {
    nome: "Notebook",
    preco: 1500,
    quantidadeEstoque: 15,
}

produto2.valorTotal = valorEstoque(produto2.preco, produto2.quantidadeEstoque)
console.log(produto2)

console.log(produto2)



function valorEstoque(preco, quantidade){
    return preco * quantidade
}

