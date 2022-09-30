import Joi from "joi";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { campoRequerido } from "../../utils/mensajesDeValidacion";
import { Auto } from "./Auto";
import { Persona } from "./Persona";

export const propietarioSchema = Joi.object<Propietario>({
    exento: Joi.boolean().required().messages({
        'any.required': campoRequerido("exento"),
    }),
}).options( {abortEarly: false} );

@Entity({name: "Propietarios"})
export class Propietario extends Persona {

    @Column("boolean")
    exento : boolean;

    @OneToMany( () => Auto, (auto) => auto.propietario ) 
    @JoinColumn()   
    autos : Auto[];

}