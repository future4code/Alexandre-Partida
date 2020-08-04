import { User } from "./Users";

// EXERCÍCIO 2

// a) foi chamada apenas 1 vez.

// b) foi chamada 2 vezes, 1 pelo código Users e outra pelo código Customers.

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

 

  