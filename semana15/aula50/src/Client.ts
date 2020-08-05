export class Cliente {

    public name: string;
    registrationNumber: number;
    consumedEnergy: number;
    public calculateBill(): number {
        return 2
    }

    constructor(name:string, registrationNumber: number, consumedEnergy: number) {
        this.name = name
        this.registrationNumber = registrationNumber
        this.consumedEnergy = consumedEnergy
        
    }

    
    
}





