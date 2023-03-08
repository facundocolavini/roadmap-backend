import { Request,NextFunction,Response } from 'express';
import { userExistById } from '../helpers/db-validators';
import { userDelete } from '../controllers/user.controller';
import { UserRequest } from '../interface/user';
import { User } from '../models/user.model';
const jwt = require('jsonwebtoken');

/* 
Middleware
Protege las rutas si no se envia un token
Lee y valida a los usuarios con token para luego almacenarlos en la request 
*/
export const validateJWT = async(req:UserRequest & Request ,res:Response,next:NextFunction)=> {
    const token =  req.get('access-token');
    if(!token){
        return res.status(401).json({
            msg:'Dont have a valid token.'
        });
    }
    
    //Validacion de jwt
    try{
        // Decodificamos el token y obtenemos el uid del usuario al que le pertenece
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        // Leemos el usuario que corresponde con el uid
        const user =  await User.findById(uid)
        // Verifica si el usuario marcado en la base de datos esta en false
        if(!user){
            return res.status(401).json({
                msg:'User dont exist in database.'
            });
        }
        if(!user.state){
            return res.status(401).json({
                msg:'Dont have a valid token user with state false.'
            });
        }
        
        req.user = user;

        
        next()
        
    }catch(err){
        console.log(err);
        return res.status(401).json({
            msg:'Token invalid'
        });
    }
}