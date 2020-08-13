    EXERCÍCIO 1
    
    A) os dados são devolvidos pelo SQL em um array com várias informações. como precisamos apenas das 
    informações da primeira posição do array, informamos isso na resposta através da posição [0]
    
    B)
    
    async function searchActor(name: string): Promise<any> {

  try {const result = await connection.raw(`
  SELECT * FROM Actor WHERE name = "${name}"
`)
console.log(result)
    
  } catch (error) {
    console.log(error)
    
  }
  
}

searchActor("Tony Ramos")

C)
async function searchGender(gender: string): Promise<any> {

  try {const result = await connection.raw(`
  SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
`)
console.log(result)
    
  } catch (error) {
    console.log(error)
    
  }
  
}

searchGender("female")
searchGender("male")



