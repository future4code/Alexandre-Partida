

EXERCÍCIO 1
A)
Salt é a funcionalidade que adiciona uma string completamente aleatória na senha. Isso ajuda no processo de dificuldade para quebrar uma senha.

O cost ou salt é um fator numérico utilizado para dificultar o processo de quebra de uma senha. Quanto maior o cost, maior será o tempo que o sistema levará para testar combinações que podem se encaixar em um determinado perfil. Quanto maior os valores, melhor a sua eficácia. Nos exercícios estamos utilizando o valor 12 que é um valor bastante utilizado no mercado.

B)
import * as bcrypt from "bcryptjs";

export default class HashManager {
    async hash(text: string){
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const cypherText = await bcrypt.hash(text, salt)

        return cypherText

    }

    async compare(){

    }
} 

C)

export default class HashManager  {
    async hash(text: string): Promise<string>{
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const cypherText = await bcrypt.hash(text, salt)

        return cypherText

    }

    async compare(text: string, cypherText: string): Promise<boolean> {
       const result = await bcrypt.compare(text, cypherText)
       return result
    }
}

EXERCÍCIO 2
A) modifiquei o cadastro primeiro. 

B)
Fiz a implementação mas estou recebendo mensagem de erro: ""message": "connect ETIMEDOUT""

app.post("/signup", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    // Item c. Validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }


    
    const userData = {
      email: req.body.email,
      password: req.body.password,
    };
    
    
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();
    const cypherPassword = await new HashManager().hash(req.body.password)
    
    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, cypherPassword);

    

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
