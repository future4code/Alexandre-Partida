/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let boasVindas = confirm("Bem-vindo ao jogo de Blackjack!")
let confirmacao = confirm("Deseja iniciar uma nova rodada?")

const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const naipes = ["♦️", "♥️", "♣️", "♠️"]

/* USUÁRIO */

let numero1 = cartas[Math.floor(Math.random() * 13)]
let numero2 = cartas[Math.floor(Math.random() * 13)]
let naipe1 = naipes[Math.floor(Math.random() * 4)]
let naipe2 = naipes[Math.floor(Math.random() * 4)]


if(confirmacao = true) {
   numero1 = Number(numero1)
   naipe1
   numero2 = Number(numero2)
   naipe2
}

console.log("Usuário - cartas: ", numero1, naipe1, numero2, naipe2, " - pontuação: ", numero1 + numero2)

/* COMPUTADOR */

let numero3 = cartas[Math.floor(Math.random() * 13)]
let numero4 = cartas[Math.floor(Math.random() * 13)]
let naipe3 = naipes[Math.floor(Math.random() * 4)]
let naipe4 = naipes[Math.floor(Math.random() * 4)]


if (confirmacao = true) {
   numero3 = Number(numero3)
   naipe3
   numero4 = Number(numero4)
   naipe4  
}

console.log ("Computador - cartas: ", numero3, naipe3, numero4, naipe4, " - pontuação: ", numero3 + numero4 )