(()=>{
    interface Xmen {
        name:string;
        realName: string;
        mutantPower(id : number):string;
    }
    interface Human {
        age:number;
    }
    //Implementamos mi interface en Mutant
    class Mutant implements Xmen, Human {
        constructor(
            public age:number,
            public name: string,
            public realName:string
        ){}
        
        mutantPower(){ return `${this.name} ${this.realName}`}
    }
})()