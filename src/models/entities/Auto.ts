import Joi from "joi";
import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { campoNoPuedeEstarVacio, campoRequerido } from "../../utils/mensajesDeValidacion";
import { Inspeccion } from "./Inspeccion";
import { ModeloAuto } from "./ModeloAuto";
import { Propietario, propietarioSchema } from "./Propietario";

export const modeloAutoEnAutoSchema = Joi.object<ModeloAuto>({
    id: Joi.string().required().messages({
        'any.required': campoRequerido("id"),
        'string.empty': campoNoPuedeEstarVacio("id"),
    }),
}).options({ abortEarly: false });

export const autoSchema = Joi.object<Auto>({
    dominio: Joi.string().required().messages({
        'any.required': campoRequerido("dominio"),
        'string.empty': campoNoPuedeEstarVacio("dominio"),
    }),
    modelo: modeloAutoEnAutoSchema.required(),
    propietario: propietarioSchema.required().messages({
        'any.required': campoRequerido('propietario'),
    }),
}).options( {abortEarly: false} );

@Entity({name: "autos"})
export class Auto {

    @PrimaryColumn("varchar")
    dominio : string;

    @ManyToOne( () => ModeloAuto )
    @JoinColumn()
    modelo : ModeloAuto;

    @ManyToOne( () => Propietario, (propietario) => propietario.autos )
    @JoinColumn()
    propietario : Propietario;

    @OneToMany( () => Inspeccion, (inspeccion) => inspeccion.auto )
    inspecciones : Inspeccion[];

}