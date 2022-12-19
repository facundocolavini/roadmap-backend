import { Request, Response } from "express";

export const usersGet = (req: Request, res: Response) => {
    res.json({
        msg: 'GET API - Controlador [usersGet]'
    });
}

export const userPost = (req: Request, res: Response) => {
    const { name, age } = req.body // Informacion que nos envia el cliente en el body
    res.json({
        msg: 'POST API - Controlador [userPost]',
        name,
        age
    });
}

export const userPut = (req: Request, res: Response) => {
    // Obtenemos los parametros
    const { id } = req.params;
    // Para obtener en la respuesta los query params
    const { name = 'No name', email } = req.query

    if (!id) {
        res.status(404).send({
            msg: 'Id NOT FOUND'
        })
    }
    res.json({
        msg: 'PUT API - Controlador [userPut]',
        id,
        name
    });
}

export const userDelete = (req: Request, res: Response) => {
    res.json({
        msg: 'GET API - Controlador [userDelete]'
    });
}

module.exports = {
    usersGet,
    userPost,
    userPut,
    userDelete
}