// Armazenando uma função em uma variavel 

const imprimirSoma = function(a, b){
    return a + b
}

let imprimirMultiplicar = function(a, b){
    return a * b
}

console.log(imprimirSoma(5, 5))
console.log(imprimirMultiplicar(10, 5))

// com arrow
const soma = (a, b) => {return a + b}
const multiplica = (a, b) => {return a * b}



console.log("arrow =>")
console.log(soma(5, 5))
console.log(multiplica(7, 2))
