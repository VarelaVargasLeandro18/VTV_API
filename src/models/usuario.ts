import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn } from "typeorm"
import Joi from "joi";
import { campoLargoMaximo, campoLargoMinimo, campoNoEsEmail, campoNoPuedeEstarVacio, campoRequerido } from "../utils/mensajesDeValidacion";
import { dateJoiCustomValidation } from "../utils/CustomJoiValidations";

export const userRegisterSchema = Joi.object({

    email: Joi.string().email().required().messages({
        'any.required': campoRequerido("email"),
        'string.email': campoNoEsEmail("email"),
    }),
    nombre: Joi.string().required().messages({
        'any.required': campoRequerido("nombre"),
        'string.empty': campoNoPuedeEstarVacio("apellido"),
    }),
    apellido: Joi.string().required().messages({
        'any.required': campoRequerido("apellido"),
        'string.empty': campoNoPuedeEstarVacio("apellido"),
    }),
    contrasenia: Joi.string().min(6).max(20).required().messages({
        'any.required': campoRequerido("contrasenia"),
        'string.empty': campoNoPuedeEstarVacio("contrasenia"),
        'string.min': campoLargoMinimo("contrasenia", 6),
        "string.max": campoLargoMaximo("contrasenia", 20),
    }),
    fechaNacimiento: Joi.string().required().custom( dateJoiCustomValidation ).messages({
        'any.required': campoRequerido("fechaNacimiento"),
        'noesfecha': "No cumple con el formato de fecha."
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
    fechaNacimiento : string;

}