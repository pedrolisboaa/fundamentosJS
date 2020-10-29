// função sem retorno

function soma(a,b){
    console.log(a + b)
}

function falarBomDia(){
    console.log("Bom dia viado!")
}


soma(5, 5)
soma(5, 10)
soma(5, 7)
falarBomDia()
falarBomDia()

// Função com retorno
function multiplica(a, b=0){
    return a * b
}

console.log(multiplica(5, 5))
console.log(multiplica(5))
console.log(multiplica(3, 99))