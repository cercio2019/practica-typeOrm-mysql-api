import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    primerNombre : String;

    @Column()
    segundoNombre : String;
}