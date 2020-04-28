/* Exercício 1

O código testa se um número é par. Se ele for par o sistema mostra a mensagem "Passou no teste." 
Caso o número seja ímpar, o sistema mostrará a mensagem "Não passou no teste."

Exercício 2

a) para verificar o preço de determinada fruta.
b) "O preço da fruta Maça é 2.25"
c) 24,55
d) O preço seria 5,0.

Exercício 3
O terminal apresentará erro com a seguinte mensagem "Uncaught ReferenceError: mensagem is not defined
    at" porque o console.log (mensagem) está fora do colchete portanto, ele não está considerando
as variáveis dentro do bloco if.

*/

/* Exercício 4 
A) não acontece nada se os numeros forem iguais
*/

let numero1 = prompt ("Digite o primeiro número")
let numero2 = prompt ("Digite o segundo número")

numero1 = Number (numero1)
numero2 = Number (numero2)


if (numero1 < numero2) {
    console.log (numero2, "e", numero1)
}
if (numero1 > numero2) {
    console.log (numero1, "e",  numero2)
}