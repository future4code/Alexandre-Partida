"use strict";
function createPerson(name) {
    return { name: name };
}
function createAge(idade) {
    return { idade: idade };
}
const myPerson2 = createPerson("Robson");
const myAge = createAge(45);
console.log("Olá, ", myPerson2, "Você tem ", createAge);
