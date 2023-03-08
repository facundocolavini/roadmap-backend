import { Response, Request } from 'express';
import { generateJWT } from '../../helpers';
import { User } from '../../models/user.model';
const bcryptjs = require('bcryptjs');

export const login = async(req:Request, res:Response) => {
    const {email, password} = req.body;
    
    try{
        // Verificar si el email existe 
        const user = await User.findOne({ email: email});
        if(!user){
            return res.status(400).json({
                msg:'User | Email invalid'
            })
        }
        // Si el usuario esta activo en la DB
        if(!user.state){
            return res.status(400).json({
                msg: 'User | User does not exist'
            })
        }
        // Verificar la password
        // Chequea de forma asincrona si el hash del password es igual al password de la db.
        const validatePassword: boolean = bcryptjs.compareSync( password, user.password)
        if(!validatePassword){
            return res.status(400).json({
                msg: 'User | User password is invalid'
            })
        }
        // Generar el JWT
        const token = await generateJWT(user.id)
        res.json({
            msg: 'User login',
            user,
            token
        })
    }catch(err){
        res.json({
            msg: 'Contact to administrator'
        })
    }

}



module.exports = {
    login    
}