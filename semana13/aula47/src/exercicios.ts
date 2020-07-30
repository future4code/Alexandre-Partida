import axios from "axios";

// EXERCÍCIO 1
// a) usamos o endpoint GET /subscribers/all
// b) fazemos a tipagem como Promise<user[]>, sendo que o user foi a tipagem feita.


const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

// type user ={
//     id: string,
//     name: string,
//     email: string
// }

// async function getUsers(): Promise<user[]> {

//    const users = await axios.get(`${baseUrl}/subscribers/all`);
//    return users.data.map((response: any)=>{
//        return {
//            id: response.id,
//            name: response.name,
//            email: response.email
//        }
//    });
//}

// getUsers().then((response)=>{
//  console.log(response);
//}) 

// EXERCÍCIO 2

// const getUsers = async (): Promise<user[]> =>  {

//    const users = await axios.get(`${baseUrl}/subscribers/all`);
//    return users.data.map((response: any)=>{
//      return {
//           id: response.id,
//           name: response.name,
//            email: response.email
//       }
//    });
// }

// const resultado = getUsers().then((response)=>{
//     console.log(response)
// })


// EXERCÍCIO 3
// a) não tive erros.
// b) o Axios por si só não consegue converter os dados dos assinantes para o formato pedido que é um array 
// então, utilizamos o map para fazer a conversão para o formato pedido.

// EXERCÍCIO 4

// a) tipei a função como Promise<void> já que ela não retorna nada.

async function createNews(): Promise<void> { 

    const newsCreation = await axios.put(`${baseUrl}/news`, {
        title: "NOVA NOTICIA",
        content: "criando nova noticia para teste",
        date: Date.now()
    });

}

createNews();

    