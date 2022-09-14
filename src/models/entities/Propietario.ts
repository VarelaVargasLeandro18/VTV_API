import { Column, Entity, OneToMany } from "typeorm";
import { Auto } from "./Auto";
import { Persona } from "./Persona";

@Entity({name: "Propietarios"})
export class Propietario extends Persona {

    @Column("boolean")
    exento : boolean;

    @OneToMany( () => Auto, (auto) => auto.propietario )    
    autos : Auto[];

}