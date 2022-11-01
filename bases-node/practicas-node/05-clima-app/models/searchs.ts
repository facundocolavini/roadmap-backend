import axios from 'axios';

export class Searchs {
    public history :Array<string> = [];

    constructor(){
        // TODO: Leer DB si existe

    }

    async searchCity <T>( place: string ):Promise<Array<T>>{// Es asyncrono por que se conecta a una db o pega a una api externa o algo externo
        console.log('TE GUS',place);
        try{
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp);

            return []
        }
        catch(error){
            console.log(error);
            return []

        }
    }
}