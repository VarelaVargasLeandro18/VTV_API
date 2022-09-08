import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


export const userSchema = Joi

@Entity({name: "Usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn("uuid")
    id : string;

    @Column("varchar", {length: 20})
    email : string;

    @Column("varchar", {length: 50})
    firstname : string;

    @Column("varchar", {length: 50})
    lastname : string;

    @Column("int")
    age : number;

    @Column("varchar", {length: 20})
    password : string;

}