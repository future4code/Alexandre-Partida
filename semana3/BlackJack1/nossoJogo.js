let boasVindas = confirm("Bem-vindo ao jogo de Blackjack!")
let confirmacao = confirm("Deseja iniciar uma nova rodada?")


const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const naipes = ["♦️", "♥️", "♣️", "♠️"]
 

/* Numeros Usuários */


let numero1 = cartas[Math.floor(Math.random() * 13)]
let numero2 = cartas[Math.floor(Math.random() * 13)]

if (numero1 === "A") {
   numero1 = 11  
} 

   else if (numero1 === "J" || numero1 === "Q" || numero1 === "K") {
   numero1 = 10

} else {
      numero1 = Number(numero1)
      numero2 = Number(numero2)
   }

if (numero2 === "A") {
      numero2 = 11  
   } 
   
    else if (numero2 === "J" || numero2 === "Q" || numero2 === "K") {
      numero2 = 10
   
   } else {
         numero1 = Number(numero1)
         numero2 = Number(numero2)
      }

let naipe1 = naipes[Math.floor(Math.random() * 4)]
let naipe2 = naipes[Math.floor(Math.random() * 4)]


naipe1
naipe2

numero1 = Number(numero1)
numero2 = Number(numero2)

console.log("Usuário - cartas: ", numero1, naipe1, numero2, naipe2, " - pontuação: ", numero1 + numero2)


let total1 = numero1 + numero2


/* Numeros Sistema*/

let numero3= cartas[Math.floor(Math.random() * 13)]
let numero4 = cartas[Math.floor(Math.random() * 13)]

if (numero3 === "A") { 
   numero3 = 11

}
   else if (numero3 === "J" || numero3 === "Q" || numero3 === "K") {
   numero3 = 10
}

   else {
      numero1 = Number(numero1)
      numero2 = Number(numero2)
   }

if (numero4 === "A") {
   numero4 = 11
}

   else if (numero4 === "J" || numero4 === "Q" || numero4 === "K") {
      numero4 = 10}

      else {
         numero1 = Number(numero1)
         numero2 = Number(numero2)
      }


let naipe3 = naipes[Math.floor(Math.random() * 4)]
let naipe4 = naipes[Math.floor(Math.random() * 4)]

naipe3
naipe4  

numero3 = Number(numero3)
numero4 = Number(numero4)

console.log ("Computador - cartas: ", numero3, naipe3, numero4, naipe4, " - pontuação: ", numero3 + numero4 )

let total2 = numero3 + numero4

if (total1 > total2){
   console.log("O usuário ganhou!")
}
else {
   console.log("O computador ganhou!")
}

if (total1 === total2) {
   console.log("Empate!")
}

