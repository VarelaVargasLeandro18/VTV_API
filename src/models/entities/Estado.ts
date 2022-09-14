import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Estados")
export class Estado {

    @PrimaryGeneratedColumn("increment")
    id : number;

    @Column("varchar", {length: 20})
    estado : string;

}