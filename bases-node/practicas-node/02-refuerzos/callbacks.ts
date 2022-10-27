setTimeout(()=>{
    console.log();
    
},1000)

interface Usuario {
    id:number,
    name: string
}

const getUsuarioById = (id: number, callback: Function) =>{

    const usuario = {
        id,
        name: 'Facundo'
    }

    setTimeout(()=>{
        callback(usuario);
    },1500)
}


getUsuarioById(1, ( usuario:Usuario )=>{
    console.log(usuario.id);
    console.log(usuario.name.toUpperCase());
    
});