import JSONFileManager from "./JSONFileManager",

// EXERCÍCIOS

// 1) O constructor serve para processar o código. Fazendo uma analogia com o mundo real, 
// a classe seria uma espécie de receita e o constructor estaria responsável por colocar
// em prática a tal receita.

//  3) Foi chamada apenas 1 vez

// 4) Não é possível a menos que façamos a mudança na classe de private para public.



export default class UserAccount {
    private cpf: string;
    private name: string;
    public age: number;
    private balance: number = 0;
 
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

  
  }

  const newUser: UserAccount = new UserAccount(
      "34523456700",
      "Marcos Rocha Azevedo",
      34
  ) 

  const fileManager: JSONFileManager = new JSONFileManager("data.json")

 function createAccount(cpf: string, name: string, age: number): void {
    const newAcc = fileManager.readDatabase()

    if(newUser.age >= 18){
       newUser.push(newUser);
    }
   
 }



   
 


  

  

  

  console.log()