interface User {
    name: string
    balance: number
}

export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
            ...user,
            balance: user.balance - value	
			
		}
	}
	return undefined
}

const usuario: User = {

  name: "alexandre gesssone",
  balance: 120

};

const comSaldoMaior = performPurchase(usuario, 110);
const semSaldoMenor = performPurchase(usuario, 140);
const comSaldoIgual = performPurchase(usuario, 120);

console.log ("Resposta saldo positivo:", comSaldoMaior);
console.log ("Resposta saldo negativo:", semSaldoMenor);
console.log ("Resposta saldo igual:", comSaldoIgual);

