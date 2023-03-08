
const jwt = require('jsonwebtoken');
export const  generateJWT = (uid:string) =>{
    return new Promise((resolve, reject) => {
        // Generamos el JWT
        const payload = { uid };
        //El secret private key se debe guardar en el env
        //Este secret key firma los tokens
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        },(err :Error, token: string)=>{
            if(err) {
                console.log(err)
                reject(`Error with generating JWT: ${err.message}`)
            }else {
                resolve(token)
            }
        })
    })
}

