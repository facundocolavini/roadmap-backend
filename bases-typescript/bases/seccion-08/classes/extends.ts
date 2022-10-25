(()=>{
    class Avenger {
        constructor(
            public name:string,
            public realName:string 
        ){
            // console.log('Constructor Avenger llamado');
        }
        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger{
        constructor(
            name:string,
            realName:string,
            public isMutan:boolean
        ){
            super(name,realName)
            // console.log('Constructor Xmen llamado') 
        }
        getFullNameDesdeXmen(){
            console.log(super.getFullName());
            
        }
    }

    const wolwerine = new Xmen('Wolwerine', 'Logan',true);
    // console.log(wolwerine);

    // Accedo a un metodo extendido de mi clase avenger y lo utilizo en mi nueva clase xmen
    // wolwerine.getFullNameDesdeXmen()

    // No deja acceder auna propiedad protected
    const nuevoAvenger = new Avenger('Hola','Mundo');
    // nuevoAvenger  No aparece el metodo protected para utilizar desde afuera 

})()