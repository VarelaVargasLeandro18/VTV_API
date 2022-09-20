import { AppDataSource } from "../AppDataSource";
import { Inspector } from "../models/entities/Inspector";
import { ErrorConsultaBBDD } from "../models/errores/ErrorConsultaBBDD";
import { LABMRepository } from "./labm.repository";

export class InspectorRepository extends LABMRepository<Inspector, string> {

    constructor() {
        super( "id", AppDataSource.getRepository( Inspector ), "Inspector" );
    }
    
    /**
     * Esta función se encargará de obtener un Inspector por email
     * @throws ErrorConsultaBBDD
     * @param email 
     * @returns 
     */
    public async getByEmail ( email : string ) {

        try {
            return this.repository.findOneBy({
                email
            })
        } catch(error) {
            throw new ErrorConsultaBBDD(error);
        }

    }

    /**
     * Esta función se encargará de obtener un Inspector por email y contrasenia
     * @throws ErrorConsultaBBDD
     * @param email 
     * @param contrasenia 
     * @returns 
     */
    public async getByEmailAndContrasenia ( email : string, contrasenia : string ) {

        try {
            return this.repository.findOneBy({
                email,
                contrasenia
            })
        } catch(error) {
            throw new ErrorConsultaBBDD(error);
        }

    }

    /**
     * Guarda un inspector
     * @throws ErrorActualizacionBBDD
     * @param inspector 
     * @returns 
     */
    public async saveInspector ( inspector : Inspector ) {
        return await this.save( inspector );
    }
    
    /**
     * Realiza un "softRemove" de un inspector
     * @throws ErrorConsultaBBDD
     * @param inspector 
     * @returns 
     */
    public async deleteInspector ( inspector : Inspector ) {
        return await this.delete( inspector );
    }

}