/* Exercício 1 */

/* 
a) array (0) 
b) array (6)
c) array (12)


Exercício 2

a) as saídas impressas no console são as posições da array:

posição 0  e a posição 2

a posição "Paula" aparece como undefined porque este nome não está listado na array.

b) sim, funcionaria pois a array aceita strings ou números e o mecanismo de busca faz a procura pela posição dentro da array.


Exercício 3

Não consegui fazer.


Exercício 4

A) */


function multiplicaValores(a, b) {
    a = 7
    let multiplicacao = a * b
    multiplicacao = Number(multiplicacao)
    return multiplicacao
}

let anosHumanos = prompt ("Digite a sua idade: ")
anosHumanos = Number(anosHumanos)



console.log("A idade do seu cão é: " ,multiplicaValores(7, anosHumanos))

