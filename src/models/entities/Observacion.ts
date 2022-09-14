import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estado } from "./Estado";

export enum ESTADOS {
    APTO = "Apto",
    CONDICIONAL = "Condicional",
    RECHAZADO = "Rechazado"
}

@Entity({name: "Observaciones"})
export class Observacion {
    
    @PrimaryGeneratedColumn("uuid")
    id : string;

    @ManyToOne( () => Estado )
    @JoinColumn()
    luces : Estado;

    @ManyToOne( () => Estado )
    @JoinColumn()
    patente : Estado;

    @ManyToOne( () => Estado )
    @JoinColumn()
    chasis : Estado;

    @ManyToOne( () => Estado )
    @JoinColumn()
    espejo : Estado;

    @ManyToOne( () => Estado )
    @JoinColumn()
    vidrios : Estado;

    @ManyToOne( () => Estado )
    @JoinColumn()
    seguridad : Estado;

    @ManyToOne( () => Estado )
    @JoinColumn()
    emergenciaVehicular : Estado;

}

/* Aclaración: No se definen los estados dentro de un enum ya que se considera que estos podrían llegar a cambiarse dentro de la lógica del programa y el utilizarlos dentro de un enum implicaría tener que rearmar la base de datos completamente. */