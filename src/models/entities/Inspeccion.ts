import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Auto } from "./Auto";
import { Inspector } from "./Inspector";
import { Medicion } from "./Medicion";
import { Observacion } from "./Observacion";

@Entity({name: "Inspeccion"})
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