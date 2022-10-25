(()=>{
    abstract class Mutant {
        constructor(
            public name:string,
            public realName:string
        ){}
    }

    class Xmen extends Mutant{
        saveTheWorld(){
            return 'Mundo Salvado!';
        }
    }
    class Villian extends Mutant{
        domaintTheWorld(){ return 'Mundo Conquistado!'}
    }
    const wolwerine =  new Xmen('Wolwerine','Logan')
    const magneto =  new Villian('Magneto','Magnus')

    // console.log(wolwerine,'Abstract')
    // console.log(magneto,'Abstract')

    // Metodos de clases abstracta 
    // console.log(wolwerine.saveTheWorld(),'Metodo Abstract')
    // console.log(magneto.domaintTheWorld(),'Abstract')


    const printName = (character : Mutant) =>{
        console.log(character.realName)
    }

    // printName(wolwerine)
    // printName(magneto)
})()