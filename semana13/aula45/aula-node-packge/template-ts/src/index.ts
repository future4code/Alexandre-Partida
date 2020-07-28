type person = {
  name: string
};

type age = {
  idade: number
}

function createPerson(name: string): person {
	return {name: name} 
} 

function createAge(idade: number): age {
  return {idade: idade}
}

const myPerson2 = createPerson("Robson");
const myAge = createAge(45);

console.log("Olá, ", myPerson2, "Você tem ", createAge);
c