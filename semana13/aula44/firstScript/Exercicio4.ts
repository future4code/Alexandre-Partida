type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}


/*
a) precisamos colocar no terminal já dentro da pasta onde está o arquivo o comando "tsc Exercicio4.ts" e em seguida
já acontecerá a compilação para um arquivo js.

b) sim, é diferente. Primeiro montamos o arquivo tsConfig.json fora da pasta src. O arquivo que desejamos compilar colocamos
dentro da pasta src. assim que terminamos de codar, vamos na pasta raiz e digitamos o código tsc. 

c) sim, quando damos o comando tsc ele compila todos os arquivos que estão na pasta src.

d) o arquivo que criamos manualmente parece ser uma espécie de resumo do que existe no arquivo maior.

*/