import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estado } from "./Estado";

@Entity({name: "Mediciones"})
export class Medicion {

    @PrimaryGeneratedColumn("uuid")
    id : string;

    @ManyToOne( () => Estado )
    @JoinColumn()
    frenos : Estado;

    @ManyToOne( () => Estado )
    @JoinColumn()
    suspension : Estado;

    @ManyToOne( () => Estado )
    @JoinColumn()
    direccion : Estado;

    @ManyToOne( () => Estado )
    @JoinColumn()
    trenDelantero : Estado;

    @ManyToOne( () => Estado )
    @JoinColumn()
    sistemaFrenos : Estado;

    @ManyToOne( () => Estado )
    @JoinColumn()
    contaminacionAmbiental : Estado;

}