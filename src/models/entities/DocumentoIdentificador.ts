import Joi from "joi";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { campoNoCorrespondeAValores, campoNoPuedeEstarVacio, campoRequerido } from "../../utils/mensajesDeValidacion";
import { Persona } from "./Persona";

// Según: https://www.argentina.gob.ar/interior/dine/capacitacion/autoridades/documentosvalidosparavotar
export enum TIPO_DOCUMENTO {
    LIBRETA_CIVICA = "Libreta Cívica",
    LIBRETA_ENROLAMIENTO = "Libreta Enrolamiento",
    DNI_LIBRETA_VERDE = "Dni Libreta Verde",
    DNI_TARJETA = "Dni Tarjeta"
}
  
const valoresTipoDocumento = [...Object.values(TIPO_DOCUMENTO)];

export const DocumentoIdentificadorSchema = Joi.object({

    numero: Joi.number().required().messages({
        'any.required': campoRequerido("email"),
    }),
    tipo: Joi.string().valid( ...valoresTipoDocumento ).required().messages({
        'any.required': campoRequerido("tipo"),
        'string.empty': campoNoPuedeEstarVacio("tipo"),
        'any.only': campoNoCorrespondeAValores( "tipo", valoresTipoDocumento )
    }),

}).options( { abortEarly: false } );

@Entity({name: "Documentos"})
export class DocumentoIdentificador {

    @PrimaryColumn({type: "int", width: 8})
    numero : number;

    @Column({
        type: 'enum',
        enum: TIPO_DOCUMENTO,
        default: TIPO_DOCUMENTO.DNI_TARJETA
    })
    tipo : TIPO_DOCUMENTO;

    persona : Persona;
    
}