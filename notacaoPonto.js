console.log(Math.ceil(6.1))
console.log(Math.floor(7.5))

const obj1 = {}
obj1.nome = "bola"
obj1["nome"] = "bola"

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj("Carro")
console.log(obj2)
const obj3 = new Obj("Cadeira")