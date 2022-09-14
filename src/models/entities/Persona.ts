import Joi from "joi";
import { Column, CreateDateColumn, DeleteDateColumn, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { dateJoiCustomValidation } from "../../utils/CustomJoiValidations";
import { campoNoPuedeEstarVacio, campoRequerido } from "../../utils/mensajesDeValidacion";
import { DocumentoIdentificador, DocumentoIdentificadorSchema } from "./DocumentoIdentificador";

export const PersonaSchema = Joi.object({
    
    documento: DocumentoIdentificadorSchema.required().messages({
        'any.required': campoRequerido("documento"),
    }),
    nombre: Joi.string().required().messages({
        'any.required': campoRequerido("nombre"),
        'string.empty': campoNoPuedeEstarVacio("apellido"),
    }),
    apellido: Joi.string().required().messages({
        'any.required': campoRequerido("apellido"),
        'string.empty': campoNoPuedeEstarVacio("apellido"),
    }),
    fechaNacimiento: Joi.string().required().custom( dateJoiCustomValidation ).messages({
        'any.required': campoRequerido("fechaNacimiento"),
        'noesfecha': "No cumple con el formato de fecha."
    }),
    
}).options({ abortEarly: false });

export abstract class Persona {

    @PrimaryGeneratedColumn("uuid")
    id : string;

    @OneToOne( () => DocumentoIdentificador, (documento) => documento.persona, {
        cascade: true
    } )
    @JoinColumn()
    documento : DocumentoIdentificador;

    @Column("varchar", {length: 50})
    nombre : string;

    @Column("varchar", {length: 50})
    apellido : string;

    @CreateDateColumn()
    fechaCreacion : Date;

    @DeleteDateColumn()
    fechaEliminado : Date;

    @Column("date")
    fechaNacimiento : string;

}