import Joi from "joi";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { campoNoPuedeEstarVacio, campoRequerido } from "../../utils/mensajesDeValidacion";
import { MarcaAuto } from "./MarcaAuto";

export const marcaAutoEnModeloAuto = Joi.object<MarcaAuto>({
    id: Joi.string().required().messages({
        'any.required': campoRequerido("id"),
        'string.empty': campoNoPuedeEstarVacio("id"),
    }),
}).options( {abortEarly: false} );

export const modeloAutoSchema = Joi.object<ModeloAuto>({
    modelo: Joi.string().required().messages({
        'any.required': campoRequerido("modelo"),
        'string.empty': campoNoPuedeEstarVacio("modelo"),
    }),
    marca: marcaAutoEnModeloAuto.required(),
}).options( {abortEarly: false} );

@Entity({name: "modelos_autos"})
export class ModeloAuto {

    @PrimaryGeneratedColumn("uuid")
    id : string;

    @Column("varchar", {length: 50})
    modelo : string;

    @ManyToOne( () => MarcaAuto )
    marca : MarcaAuto;

}