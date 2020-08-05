import { Cliente } from "./Client";
import { Place } from "./Place";
import { Industry } from "./Industry";
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";


// EXERCICIOS

// EXERCÍCIO 1A - fiz a impressão de todas as propriedades, execeto a calculateBill. Não consegui chamar ela no index.


/*
const newClient: Cliente = new Cliente (
    "Alexandre Gessone",
    6954049544,
    20
)

console.log(newClient)


EXERCÍCIO 2A - no momento de criação ele já demarca e informa que não é possível criar uma instância de uma classe
abstrata. 

EXERCÍCIO 2B - seria necessário criar uma classe mais específica herdando a classe abstrata e a partir daí, fazer a 
instância da classe mais específica.

*/

const newResidence: Residence = new Residence (
    10,
    "02432-000",
  )


  const newCommerce: Commerce = new Commerce (
    20,
    "00000-000",
  )

  
  const newIndustry: Industry = new Industry (
    30,
    "03202-000",
  )

  console.log(newIndustry.getCep())
  console.log(newCommerce.getCep())
  console.log(newResidence.getCep())