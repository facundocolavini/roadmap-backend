import { Response, Request } from 'express';


export const login = async(req:Request, res:Response) => {
    res.json({
        msg: 'User login',
    })
}












module.exports = {
    login    
}