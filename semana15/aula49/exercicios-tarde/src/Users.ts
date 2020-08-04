import * as fs from "fs";

// EXERCÍCIO 1

// a) sim, foi possível.

// b) apenas 1 vez.

export class User {
    public interoduceYourself(): string {
        return 'Olá, ${this.name} bom dia!'
    }
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    
  
    constructor(
        
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }

 