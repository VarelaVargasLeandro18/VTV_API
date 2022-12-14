import Joi from "joi";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { campoNoCorrespondeAValores, campoNoPuedeEstarVacio, campoRequerido } from "../../utils/mensajesDeValidacion";
import { Persona } from "./Persona";

/**
 * Datos obtenidos de: https://www.argentina.gob.ar/interior/dine/capacitacion/autoridades/documentosvalidosparavotar]
 * Lo más conveniente es persistir esta información en otra tabla ya que podría llegar a sufrir cambios, pero
 * por cuestiones de simpleza se opto por esta aproximación
 */
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

    @OneToOne( () => Persona )
    @JoinColumn()
    persona : Persona;
    
}