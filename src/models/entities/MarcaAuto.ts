import Joi from "joi";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { campoNoPuedeEstarVacio, campoRequerido } from "../../utils/mensajesDeValidacion";

export const marcaAutoSchema = Joi.object<MarcaAuto>({
    marca: Joi.string().required().messages({
        'any.required': campoRequerido("marca"),
        'string.empty': campoNoPuedeEstarVacio('marca'),
    }),
}).options( {abortEarly: false} );

@Entity({name: "marcas_autos"})
export class MarcaAuto {

    @PrimaryGeneratedColumn("uuid")
    id : string;

    @Column("varchar", {length: 50})
    marca : string;

}