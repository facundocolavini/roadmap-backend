import  { validationResult } from'express-validator';
import { Request, Response, NextFunction } from "express";


/* 
Middleware
*/

/** 
 * Funcion middleware para validar campos
 * 
 *  **/
export const validateFields = (req:Request,res:Response,next:NextFunction)=>{
    // Validamos todos los campos necesarios con express validator
    const errors = validationResult(req);
     if(!errors.isEmpty()){
        return res.status(404).json(errors)
    }
    //Si pasa el middleware pasa al siguiente y si no hay mas middlewares entonces pasa al controller.
    next();
}