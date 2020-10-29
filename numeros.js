const pesoUm = 1.0
const pesoDois = Number('2.0')
const pesoTres = 3.14
const nomeTeste = 'Pedro'

console.log(pesoUm)
console.log(pesoDois)
console.log(Number.isInteger(pesoUm))
console.log(Number.isInteger(pesoDois))
console.log(Number.isInteger(pesoTres))
console.log(Number.isFinite(pesoUm))
console.log(Number.isInteger(nomeTeste))

const notaProvaUm = 7.54
const notaProvaDois = 8.4

const total = notaProvaUm * pesoUm + notaProvaDois * pesoDois
const media = total / (pesoUm + pesoDois)
console.log(media.toFixed(2))
console.log(typeof(media.toString()))

const binario = 03716477117
console.log(binario.toString(2))
console.log(typeof(binario))