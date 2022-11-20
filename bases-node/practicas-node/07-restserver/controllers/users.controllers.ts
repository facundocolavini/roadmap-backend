import { Request, Response } from "express";

export const usersGet = (req: Request, res: Response) => {
    res.json({
        msg: 'GET API - Controlador [usersGet]'
    });
}

export const userPost = (req: Request, res: Response) => {
    res.json({
        msg: 'POST API - Controlador [userPost]'
    });
}

export const userPut = (req: Request, res: Response) => {
    res.json({
        msg: 'PUT API - Controlador [userPut]'
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