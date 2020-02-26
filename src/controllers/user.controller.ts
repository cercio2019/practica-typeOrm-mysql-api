import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import {User} from '../entity/user';

export class UserController{

    public  getUsers = async (req : Request, res : Response):Promise<Response> =>{
        const usuarios = await  getRepository(User).find();
        return res.json(usuarios);
    }

    public getUser = async (req : Request, res : Response):Promise<Response> =>{
        const user = await getRepository(User).findOne(req.params.id);
        return res.json(user);
    }

    public createUser = async (req : Request, res : Response):Promise<Response> =>{
        const newUser = getRepository(User).create(req.body);
        const result = await getRepository(User).save(newUser);
        return res.json(result);
    }

    public updateUser = async (req : Request, res : Response):Promise<Response> =>{
        const user = await getRepository(User).findOne(req.params.id);
        if(user){
            getRepository(User).merge(user, req.body);
            const result = await getRepository(User).save(user);
            return res.json(result);
        }
        return res.status(404).json({error: "usuario no existe"});
    }

    public deleteUser = async (req : Request, res : Response):Promise<Response> =>{
        const usuario = await getRepository(User).delete(req.params.id);
        return res.json(usuario);
    }
}