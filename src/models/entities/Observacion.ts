import Joi from "joi";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { campoNoCorrespondeAValores, campoNoPuedeEstarVacio, campoRequerido } from "../../utils/mensajesDeValidacion";
import { ESTADOS, valoresEstados } from "./Estados";

export const observacionSchema = Joi.object<Observacion>({
    luces: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("luces"),
        'string.empty': campoNoPuedeEstarVacio("luces"),
        'any.only': campoNoCorrespondeAValores("luces", valoresEstados),
    }),
    patente: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("patente"),
        'string.empty': campoNoPuedeEstarVacio("patente"),
        'any.only': campoNoCorrespondeAValores("patente", valoresEstados),
    }),
    chasis: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("chasis"),
        'string.empty': campoNoPuedeEstarVacio("chasis"),
        'any.only': campoNoCorrespondeAValores("chasis", valoresEstados),
    }),
    espejos: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("espejos"),
        'string.empty': campoNoPuedeEstarVacio("espejos"),
        'any.only': campoNoCorrespondeAValores("espejos", valoresEstados),
    }),
    vidrios: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("vidrios"),
        'string.empty': campoNoPuedeEstarVacio("vidrios"),
        'any.only': campoNoCorrespondeAValores("vidrios", valoresEstados),
    }),
    seguridad: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("seguridad"),
        'string.empty': campoNoPuedeEstarVacio("seguridad"),
        'any.only': campoNoCorrespondeAValores("seguridad", valoresEstados),
    }),
    emergenciaVehicular: Joi.string().required().valid( valoresEstados ).messages({
        'any.required': campoRequerido("emergenciaVehicular"),
        'string.empty': campoNoPuedeEstarVacio("emergenciaVehicular"),
        'any.only': campoNoCorrespondeAValores("emergenciaVehicular", valoresEstados),
    }),
});

@Entity({name: "Observaciones"})
export class Observacion {
    
    @PrimaryGeneratedColumn("uuid")
    id : string;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    luces : ESTADOS;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    patente : ESTADOS;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    chasis : ESTADOS;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    espejos : ESTADOS;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    vidrios : ESTADOS;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    seguridad : ESTADOS;

    @Column({
        type: 'enum',
        enum: ESTADOS,
        default: ESTADOS.RECHAZADO
    })
    emergenciaVehicular : ESTADOS;

}