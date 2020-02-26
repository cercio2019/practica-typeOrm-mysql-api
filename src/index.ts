import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import {createConnection} from 'typeorm';

import user from './routes/user.routes';

class  Server {

    app = express();

    constructor(){
        createConnection();
        this.config();
        this.routes();
    }

    private config():void{
        this.app.set('port', process.env.PORT || 3001);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    private routes():void{
        this.app.use('/user', user)
    }

    public initServer():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('el servidor ha iniciado en el puerto', this.app.get('port'));
        });
    }
}

const server = new Server();
server.initServer();
