/* EXERCÍCIO 1 

a)
const minhaString: string = 2403
se atribuirmos um número ele não aceita pois definimos que a variável é string.

b)
const meuNumero: number | string = 2403
para que o ambas as opções sejam aceitas precisamos tipificar a variavel com a opção number | string

c)
const pessoa: {name: string, age: number, favoriteColor: string } = {
    name: "Alex",
    age: 30,
    favoriteColor: "vermelho"
}
ao fazer a tipagem, podemos garantir que o objeto somente receberá dados que estão de acordo com ela.

d)

type person = {
    name: string,
    age: number,
    favoriteColor: string
}

const users: person = {
    name: "Victor",
    age: 33,
    favoriteColor: "azul"
}

const subscribers: person ={
    name: "Claudia",
    age: 25,
    favoriteColor: "preto"
}

const listeners: person = {
    name: "Livia",
    age: 20,
    favoriteColor: "rosa"
}

e)

enum colorClasses {
    VIOLET = "Violeta",
    INDIGO = "Anil",
    BLUE = "Azul",
    GREEN = "Verde",
    YELLOW = "Amarelo",
    ORANGE = "Laranja",
    RED = "Vermelho"
}


type person = {
    name: string,
    age: number,
    favoriteColor: colorClasses
}

const users: person = {
    name: "Victor",
    age: 33,
    favoriteColor: colorClasses.BLUE
}

const subscribers: person ={
    name: "Claudia",
    age: 25,
    favoriteColor: colorClasses.RED
}

const listeners: person = {
    name: "Livia",
    age: 20,
    favoriteColor: colorClasses.VIOLET
}


EXERCÍCIO 2

a)
as entradas são os números dados pelo usuário e a saída são os números ordenados pelo maior, menor e a média.


function obterEstatisticas(numeros: number[]): number[] {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }
   
    

    const estatisticas: {maior: number, menor: number, media: number } = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas 
}

b) compõem a função a variável estatisticas


EXERCÍCIO 3

a)

type newPosts =  {
        autor: string,
        texto: string
  } []

  const posts: newPosts = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]



b)
entrada: autorInformado
saída: post.autor
*/

  
    



  

