import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "Marcas_Autos"})
export class MarcaAuto {

    @PrimaryGeneratedColumn("uuid")
    id : string;

    @Column("varchar", {length: 50})
    marca : string;

}