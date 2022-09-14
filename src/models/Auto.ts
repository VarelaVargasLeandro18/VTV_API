import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Inspeccion } from "./Inspeccion";
import { MarcaAuto } from "./MarcaAuto";
import { ModeloAuto } from "./ModeloAuto";
import { Propietario } from "./Propietario";

@Entity({name: "Autos"})
export class Auto {

    @PrimaryColumn("varchar")
    dominio : string;

    @ManyToOne( () => MarcaAuto )
    @JoinColumn()
    marca : ModeloAuto;

    @ManyToOne( () => Propietario, (propietario) => propietario.autos )
    @JoinColumn()
    propietario : Propietario;

    @OneToMany( () => Inspeccion, (inspeccion) => inspeccion.auto )
    inspecciones : Inspeccion[];

}