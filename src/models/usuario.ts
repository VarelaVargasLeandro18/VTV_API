import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn } from "typeorm"
import Joi from "joi";
import { campoRequerido } from "../utils/mensajesDeValidacion";

export const userRegisterSchema = Joi.object({

    email: Joi.string().email().required().messages({
        'any.required': campoRequerido("email")
    }),
    nombre: Joi.string().required().messages({
        'any.required': campoRequerido("nombre")
    }),
    apellido: Joi.string().required().messages({
        'any.required': campoRequerido("apellido")
    }),
    contrasenia: Joi.string().min(6).max(20).required().messages({
        'any.required': campoRequerido("contrasenia")
    }),
    fechaNacimiento: Joi.date().required().messages({
        'any.required': campoRequerido("fechaNacimiento")
    }),
    
}).options({ abortEarly: false });

export const userLoginSchema = Joi.object({

    email: Joi.string().email().required(),
    contrasenia: Joi.string().required(),

});

@Entity({name: "Usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn("uuid")
    id : string;

    @Column("varchar", {length: 50})
    email : string;

    @Column("varchar", {length: 50})
    nombre : string;

    @Column("varchar", {length: 50})
    apellido : string;

    @Column("varchar", {length: 30})
    contrasenia : string;

    @CreateDateColumn()
    fechaCreacion : Date;

    @DeleteDateColumn()
    fechaEliminado : Date;

    @Column("date")
    fechaNacimiento : Date;

}