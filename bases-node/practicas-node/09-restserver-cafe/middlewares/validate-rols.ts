import { Response,Request, NextFunction } from "express";
import { UserRequest } from "../interface/user";
import { ROL_KEYS } from '../enums/rol_keys';


export const isAdmin = (req: UserRequest & Request, res: Response, next:NextFunction) => {
    if(!req.user){
        res.status(500).json({
            msg: 'Expected validate role first but dont have a valid user token.'
        })
    }
    const {rol, name} = req.user;

   if(rol !== ROL_KEYS.ADMIN){
    return res.status(401).json({
        msg: `${name} is not a valid admin`
    })
   }

   next(); 
} 


export const hasRole = (...rols: string[] ) => {
    return (req: UserRequest & Request, res: Response, next:NextFunction) => { 
        const {rol, name} = req.user;
            if(!req.user){
                res.status(500).json({
                    msg: 'Expected validate role first but dont have a valid user token.'
                })
            }
            // Verifica si existe el role 
            if (!(rols).includes(rol)) {
                return res.status(401).json({
                    msg: `This services dont have this rol. Please check your roles and try again ${rols}`
                })
            }
         
           
                console.log(name)
                next();
     /*        }else{
                return res.status(401).json({
                    msg: `This user dont have this roles`
                })
            } */
      
      
    }
    
}
