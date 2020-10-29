const nome = "Pedro"
const nomeCompleto = "Pedro Henrique do Nascimento Lisboa"

console.log(nome.charAt(0))
console.log(nome.charAt(4))
console.log(nome.charAt(6))

console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))

console.log(nome.indexOf("P"))
console.log(nome.indexOf("ed"))

console.log(nome.substring(2))
console.log(nome.substring(2,4))
console.log(nome.substring(1))

console.log(nome.concat(" é lindo para caramba").concat("!"))
console.log(nomeCompleto.replace("a", 4))
console.log(nomeCompleto.replace("e", 3))

// usando expressões regulares
console.log(nomeCompleto.replace(/\e/g, 3))
console.log(nomeCompleto.replace(/\o/g, 0))

//colocando dentro de um array
console.log(nomeCompleto.split(" "))