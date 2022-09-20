import Joi from "joi";
import { Column, Entity } from "typeorm";
import { campoLargoMaximo, campoLargoMinimo, campoNoEsEmail, campoNoPuedeEstarVacio, campoRequerido } from "../../utils/mensajesDeValidacion";
import { Persona, PersonaSchema } from "./Persona";

export const inspectoresSchemaLogIn = Joi.object<Inspector>({
    email: Joi.string().email().required().messages({
        'any.required': campoRequerido("email"),
        'string.email': campoNoEsEmail("email"),
    }),
    contrasenia: Joi.string().min(6).max(20).required().messages({
        'any.required': campoRequerido("contrasenia"),
        'string.empty': campoNoPuedeEstarVacio("contrasenia"),
        'string.min': campoLargoMinimo("contrasenia", 6),
        "string.max": campoLargoMaximo("contrasenia", 20),
    }),
    
});

export const inspectoresSchemaRegistro = inspectoresSchemaLogIn.concat(PersonaSchema).options({ abortEarly: false });

@Entity({name: "Inspectores"})
export class Inspector extends Persona {
    
    @Column("varchar", {length: 50})
    email : string;

    @Column("varchar", {length: 30})
    contrasenia : string;

}