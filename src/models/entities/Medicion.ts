import Joi from "joi";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { campoNoCorrespondeAValores, campoNoPuedeEstarVacio, campoRequerido } from "../../utils/mensajesDeValidacion";
import { ESTADOS, valoresEstados } from "./Estados";

export const medicionSchema = Joi.object<Medicion>({
    frenos: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("frenos"),
        'string.empty': campoNoPuedeEstarVacio("frenos"),
        'any.only': campoNoCorrespondeAValores("frenos", valoresEstados),
    }),
    suspension: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("suspension"),
        'string.empty': campoNoPuedeEstarVacio("suspension"),
        'any.only': campoNoCorrespondeAValores("suspension", valoresEstados),
    }),
    direccion: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("direccion"),
        'string.empty': campoNoPuedeEstarVacio("direccion"),
        'any.only': campoNoCorrespondeAValores("direccion", valoresEstados),
    }),
    trenDelantero: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("trenDelantero"),
        'string.empty': campoNoPuedeEstarVacio("trenDelantero"),
        'any.only': campoNoCorrespondeAValores("trenDelantero", valoresEstados),
    }),
    sistemaFrenos: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("sistemaFrenos"),
        'string.empty': campoNoPuedeEstarVacio("sistemaFrenos"),
        'any.only': campoNoCorrespondeAValores("sistemaFrenos", valoresEstados),
    }),
    contaminacionAmbiental: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("contaminacionAmbiental"),
        'string.empty': campoNoPuedeEstarVacio("contaminacionAmbiental"),
        'any.only': campoNoCorrespondeAValores("contaminacionAmbiental", valoresEstados),
    }),
});

@Entity({name: "Mediciones"})
export class Medicion {

    @PrimaryGeneratedColumn("uuid")
    id : string;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    frenos : ESTADOS;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    suspension : ESTADOS;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    direccion : ESTADOS;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    trenDelantero : ESTADOS;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    sistemaFrenos : ESTADOS;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    contaminacionAmbiental : ESTADOS;

}