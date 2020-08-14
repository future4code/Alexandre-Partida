


import knex from "knex";
import moment from "moment";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";


/**************************************************************/

dotenv.config();
const app = express();
app.use(express.json());



/**************************************************************/

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

/**************************************************************/
/*
const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
*/

/*
app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}
*/

async function toDoListUser (): Promise<void>{

  try{
    await connection.raw(`
      CREATE TABLE TodoListUser (
      id VARCHAR(255) PRIMARY KEY, 
      name VARCHAR(255)  NOT NULL, 
      nickname VARCHAR(255) UNIQUE NOT NULL, 
      email VARCHAR(255) UNIQUE NOT NULL
    );
    `);

    console.log("Sucesso")

  } catch(error){
    console.log(error)

  }
}



async function toDoListTask (): Promise<void>{

  try{
    await connection.raw(`
    CREATE TABLE TodoListTask (
      id VARCHAR(255) PRIMARY KEY, 
      title VARCHAR(255) NOT NULL, 
      description TEXT NOT NULL, 
      status VARCHAR(255) NOT NULL DEFAULT "to_do",
      limit_date VARCHAR(255) NOT NULL,
      creator_user_id varchar(255) NOT NULL,
      FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
  );
    `);

    console.log("Sucesso")

  } catch(error){
    console.log(error)

  }
}


async function TodoListResponsibleUserTaskRelation (): Promise<void>{

  try{
    await connection.raw(`
      CREATE TABLE TodoListResponsibleUserTaskRelation (
      task_id VARCHAR(255),
      responsible_user_id VARCHAR(255),
      FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
      FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
  );
    `);

    console.log("Sucesso")

  } catch(error){
    console.log(error)

  }
}

async function createUser (id: string, name: string, nickname: string, email: string): Promise<void>{

  try{
    await connection.raw(`
      INSERT INTO TodoListUser VALUES (
        "${id}",
        "${name}",
        "${nickname}",
        "${email}"
      )
    `);

    console.log("Sucesso")

  } catch(error){
    console.log(error)

  }

}

async function searchUserById (id: string): Promise<any>{

  try{
   const result = await connection.raw(`
    SELECT id, nickname FROM TodoListUser
    WHERE id = "${id}" 
    `);

    console.log(result[0])
    

  } catch(error){
    console.log(error)

  }

}

async function userEdit (id: string, name: string, email: string, nickname: string): Promise<void>{
  
    try{
      const result = await connection.raw(`
         UPDATE TodoListUser
         SET name = "${name}", email = "${email}", nickname = "${nickname}"
         WHERE id = "${id}"
       `);
       console.log("Usuário alterado com sucesso!")
       
     } catch(error){
       console.log(error)
   
     }
  
}
// Enrolado nessa função. Não consegui prosseguir // 

async function createTask (id: string, title: string, description: string, status: string,  limit_date: Date, creatorUserId: string): Promise<void>{
   const date = moment(limit_date, "YYYY-MM-DD");
  try{
    const result = await connection.raw(`
    INSERT INTO TodoListTask 
    VALUES (id = "${id}", title = "${title}", description = "${description}", status = "${status}", limit_date = "${date}", creatorUserId = "${creatorUserId}")`);
     
    console.log("Tarefa criada com sucesso!")
     
   } catch(error){
     console.log(error)
 
   }

}

app.get("/user/:id", async (req: Request, res: Response)=>{
  const id = req.params.id
try {
  const user = await searchUserById(id);
  res.send(user).status(200);

} catch (error) {
  res.send({message: error.message}).status(400);
}

});

  
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
  const address = server.address() as AddressInfo;
  console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
  console.error(`Failure upon starting server.`);
  }
 });
