const bcryptjs = require("bcryptjs");
import { Request, Response } from "express";
import { UserRequest } from "../interface/user";

import { User } from '../models/user.model';

/* 
Controller:
 - Ayuda a manejar las rutas y peticiones a la base de datos
 - Grabar , actualizar y obtener de la base de datos
 - Validaciones 
*/

export const userGet = async (req: Request, res: Response) => {
    // Paginacion
    const { limit = 5 , from = 0 } = req.query;
    const query = { state: true };
    
    //Filtramos por los que tengan el estado en true el estado es para no borrar usuarios en la base de datos.
    const usersPromise =  User.find(query)
    .limit(Number(limit))
    .skip(Number(from))
    //Total 
    const totalPromise =  User.countDocuments(query);
    //Disparar 2 promesas de forma simultanea 
    //El await se pone para que se espere las respuestas de ambas promesas
    // Se espera a que termine una para continuar con la otra
    // Si una da a error todas dan error
    const [users,total] = await Promise.all([usersPromise,totalPromise])
    res.json({
        msg: 'Users found',
        users,
        total
    });
}

export const userPost = async(req: Request, res: Response) => {
    const { name, email, password, rol} = req.body // Informacion que nos envia el cliente en el body
    const user =  new User({name, email, password, rol}); // Instancia de usuario

    // Encriptar campos en una sola via
    const salt = bcryptjs.genSaltSync(10);
    user.password =  bcryptjs.hashSync(password, salt)

    // Guardamos los datos en la base de datos
    await user.save();
    res.json({
        msg: 'User saved',
        user
    });
}

export const userPut = async(req: Request, res: Response) => {
    // Obtenemos los parametros 
    const { id } = req.params;
    // Extraigo lo que no necesito actualizar y lo que necesito queda en rest 
    const { _id, password, google ,email , ...rest } = req.body

    // TODO validar contra base de datos los datos que no quiero actualizar

    if(password){
        // Encriptar campos en una sola via
        const salt = bcryptjs.genSaltSync(10);
        rest.password =  bcryptjs.hashSync(password, salt)
    }
    const userUpdate= await User.findByIdAndUpdate(id,rest)
    res.json({
        msg: 'User Updated',
        userUpdate
    });
}

export const userDelete = async(req: UserRequest & Request, res: Response) => {
    const { id } = req.params;
    // Fisicamente lo borramos
    // const user = await User.findByIdAndDelete(id)

    // Eliminar pero sin eliminar fisicamente el usuario sino cambiamos su estado 
    const userDeleted = await User.findByIdAndUpdate(id,{state:false})

    res.json({
        msg: 'User Deleted',
        userDeleted 
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}