/* Exercício 1

o código faz a soma de números do 0 ao 15 já que no código temos a definição de que o i precisa ser menor do que 15.

O resultado impresso no console é 105

Exercício 2
a)o push envia o número checado na divisão (variável "item") para a const novaLista

b)valores impressos no console:
10, 15, 25, 30

c)
se tivesse valor 3:
12, 15, 18, 21, 27, 30

se tivesse valor 4:
apenas o número 12

*/

/* Exercício 3 a 


const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let numMaior = array[5]
let numMenor =  array[2]

    for (let i = 0; i < array.length; i++){
    if (array[i] > numMaior) {
        numMaior = array [i]
    }
}

    console.log (numMaior)

    for (let i = 0; i < array.length; i++) {
    if (array[i] < numMenor) {
        numMenor = array[i]
    }
}

console.log (numMenor)

*/

/* Exercicio 3 b */

let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let numerosResultado = []


for (let i = 0; i < 12; i++) {
    array[i] / 10
    numerosResultado.push (array[i] / 10)

}

console.log (numerosResultado)



