import { Character, validateCharacter } from "../src/index";


describe("Testing validateCharacter", ()=>{

    test ("Testing invalidInput, field name", ()=> {
        const result = validateCharacter({
            name: "",
            life: 100,
            strength: 200,
            defense: 300,
        })

        expect(result).toBe(false);
    });

    test ("Testing field life empty", ()=> {
        const result = validateCharacter({
            name: "JoJo",
            life: 0,
            strength: 200,
            defense: 300,
        })

        expect(result).toBe(true);
    });

    test ("Testing field strenght empty", ()=> {
        const result = validateCharacter({
            name: "JoJo",
            life: 20,
            strength: 0,
            defense: 300,
        })

        expect(result).toBe(true);
    });

    test ("Testing field defense empty", ()=> {
        const result = validateCharacter({
            name: "JoJo",
            life: 20,
            strength: 100,
            defense: 0,
        })

        expect(result).toBe(true);
    });

    test ("Testing field strenght negative", ()=> {
        const result = validateCharacter({
            name: "JoJo",
            life: 20,
            strength: -10,
            defense: 300,
        })

        expect(result).toBe(false);
    });

    test ("Testing all valid fields", ()=> {
        const result = validateCharacter({
            name: "JoJo",
            life: 20,
            strength: 100,
            defense: 500,
        })

        expect(result).toBe(true);
    });
        
}  

)