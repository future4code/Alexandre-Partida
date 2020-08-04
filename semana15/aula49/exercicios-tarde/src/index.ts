import { Customer } from "./Customer"
import { User } from "./Users"

 // EXERCICIO 3

  // a) Sim porque ela não foi colocada como privada. 


  // EXERCICIO 4
  // Foi colocada a mensagem de boas vindas.


const customer: Customer = new Customer (
    "046554",
    "alexandre_bezerr@yahoo.com",
    "alexandre vitorio santos",
    "059483849",
    "459550494998383838383"
) 




const user: User = new User(
    "0249543",
    "alex.gessone@gmail.com",
    "Alexandre Gessone",
    "2222222"
)

console.log(user);
console.log(customer);