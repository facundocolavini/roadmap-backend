(()=>{
    interface Client {
        name:string;
        age?:number;       
        address?:Address
        getFullAddres(id:string):string;
    }

    interface Address {
        id:number;
        zip:string;
        city:string;
    }
    const  client: Client = {
        name : 'Fernando',
        // age: 25,
        address:{
            id: 125,
            zip: 'KE3 SUD',
            city: 'Ottawa'
        },
        getFullAddres(id:string){
            return 'Hola'
        }
    }

    const client2:Client = {
        name: 'Melissa',
        age:30,
        getFullAddres(id:string){
            return 'Hola'
        }
    }


})()