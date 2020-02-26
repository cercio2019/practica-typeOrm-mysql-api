import {Router, Request, Response} from 'express';
import {UserController} from '../controllers/user.controller';

class UserRoutes{

    router = Router();
    private userController = new UserController();

    constructor(){
        this.Rutas();
    }

    private Rutas(): void {
        this.router.get('/', this.userController.getUsers);
        this.router.get('/:id', this.userController.getUser);
        this.router.post('/registrar', this.userController.createUser);
        this.router.put('/update/:id', this.userController.updateUser);
        this.router.delete('/delete/:id', this.userController.deleteUser);
    }

}

const user = new UserRoutes()
export = user.router;
