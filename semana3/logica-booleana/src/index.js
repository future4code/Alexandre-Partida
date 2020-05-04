
/* Exercício 1 
a */

const grauF = 77
const grauK = (grauF - 32)* (5/9) +273.15
console.log("O valor é ", grauK)

/* b */

const grauC = 80
const grauFar = (grauC)* (9/5) + 32
console.log ("o valor é ", grauFar)

/* c */

const grauCent = 30
const grauFaren = (grauCent)*(9/5)+32
const grauKelvin = grauCent + 273.15
console.log ("O valor em Farenhiet é ", grauFaren, "e o valor em Kelvin é ", grauKelvin,)


/* d */


const grau1 = prompt ("Digite a temperatura em Celsius")
const grauFarenheit = (grau1)*9 / (5) +32
const grauKelvin1 = grau1 + 273.15
console.log ("O valor em Farenhiet é ", grauFarenheit, "e o valor em Kelvin é ", grauKelvin1)
