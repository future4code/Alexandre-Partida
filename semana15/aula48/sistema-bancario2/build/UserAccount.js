"use strict";
// EXERCÍCIOS
Object.defineProperty(exports, "__esModule", { value: true });
// 1) O constructor serve para processar o código. Fazendo uma analogia com o mundo real, 
// a classe seria uma espécie de receita e o constructor estaria responsável por colocar
// em prática a tal receita.
//  3) Foi chamada apenas 1 vez
// 4) Não é possível a menos que façamos a mudança na classe de private para public.
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}
exports.default = UserAccount;
const newUser = new UserAccount("34523456700", "Marcos Rocha Azevedo", 34);
const createCount = (newUser) => {
    if (newUser.age >= 18) {
        return newUser;
    }
    console.log("Usuário é menor de 18 anos");
};
console.log(createCount);
