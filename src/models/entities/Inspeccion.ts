import Joi from "joi";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { dateJoiCustomValidation } from "../../utils/CustomJoiValidations";
import { campoNoCumpleFormatoFecha, campoNoPuedeEstarVacio, campoRequerido } from "../../utils/mensajesDeValidacion";
import { Auto } from "./Auto";
import { Inspector } from "./Inspector";
import { Medicion } from "./Medicion";
import { Observacion } from "./Observacion";

export const inspeccionSchema = Joi.object({
    fecha: Joi.custom( dateJoiCustomValidation ).messages({
        'noesfecha': campoNoCumpleFormatoFecha("fecha"),
        'any.required': campoRequerido("fecha"),
        'string.empty': campoNoPuedeEstarVacio("fecha"),
    }),
}).options( {abortEarly: false} );

@Entity({name: "inspeccion"})
export class Inspeccion {
    
    @PrimaryGeneratedColumn("increment", {type: "int"})
    nro : number;

    @Column("date")
    fecha : string;

    @ManyToOne( () => Inspector )
    inspector : Inspector;

    @ManyToOne( () => Auto, (auto) => auto.inspecciones )
    auto : Auto;

    @ManyToOne( () => Observacion )
    observacion : Observacion;

    @ManyToOne( () => Medicion )
    medicion : Medicion;

    @Column("varchar", {length: 50})
    oblea : string;

}