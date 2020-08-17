

EXERCÍCIO 1

A)
Não sei se é melhor mas imagino já que os dados do front são trabalhados em formato string, ao gerar os ids nesse mesmo formato diminuímos as possibilidades de conflitos. Além disso, utilizamos letras nos IDs então não seria possível classificar apenas como Numbers.

B)
import {v4} from "uuid";

export default abstract class IdGenerator {
    static execute(): string {
        return v4()
    }
}
console.log(IdGenerator.execute())

EXERCÍCIO 2

A)
A const connection guardar as informações para acesso ao bando de dados. Essas informações vêm do arquivo .env;
A const createUser cria um novo usuário no banco de dados. Ela precisa receber um id, email e uma senha (passoword);

B)
async function createTableUser(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE User (
      id VARCHAR(255) PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
  );
    `)
    console.log("Sucesso!");
  } catch (error) {
    console.log(error);
  }

}

createTableUser();

C)import knex from "knex";
import IdGenerator from "..//services/idGenerator";


const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});



async function createUser (email: string, password: string): Promise<void> {

  try {
      
      const id = IdGenerator.execute()
      await connection
      .insert({id, email, password})
      .into("User")
      console.log("Sucesso!")
  } catch (error) {
      console.log(error)
  }
}

createUser("alex.gessone@gmail.com", "12345");

export default createUser;

