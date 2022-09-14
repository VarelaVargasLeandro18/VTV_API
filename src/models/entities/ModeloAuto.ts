import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MarcaAuto } from "./MarcaAuto";

@Entity({name: "Modelos_Autos"})
export class ModeloAuto {

    @PrimaryGeneratedColumn("uuid")
    id : string;

    @Column("varchar", {length: 50})
    modelo : string;

    @ManyToOne( () => MarcaAuto )
    marca : MarcaAuto;

}