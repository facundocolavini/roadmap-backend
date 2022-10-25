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
        get fullName(){
            return `${this.name} - ${this.realName}`
        }

        set fullName(name:string){
            if( name.length < 3) {
                throw new Error("El nombre debe de ser mayor a 3 caracteres")
            }
            
            this.name =  name;
        }
        getFullNameDesdeXmen(){
            console.log(super.getFullName());
            
        }

    }

    const wolwerine = new Xmen('Wolwerine', 'Logan',true);
    // console.log(wolwerine);

    //Getter
    // console.log(wolwerine.fullName);
    //Setter
    wolwerine.fullName = 'Facu'
    // console.log(wolwerine.fullName);
})()