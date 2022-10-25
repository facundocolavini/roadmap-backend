(()=>{
    //Forma larga de declarar una clase
    class Avenger {

        static  avgAge: number ;
        static getAvAge(){
            return this.avgAge;
        }
    
        constructor(
            private name:string = '',
            private team:string = '',
            public realName?:string,
            avgAge:number = 55      
        ){
            //Ejecuta este codigo al instanciar la clase
            Avenger.avgAge =  avgAge
        }

        bio(){
            return `${this.name} ${this.team}`
        }
      
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan')// Sin la prop realName

    // console.log(antman);
    // console.log(Avenger.avgAge);

    //Metodos publicos
    
    // console.log(antman.bio());

    // Metodos static
    // console.log(Avenger.getAvAge(),'Metodo estatico')
})()