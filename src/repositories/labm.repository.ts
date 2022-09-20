import { ObjectLiteral, Repository } from "typeorm";
import { ErrorActualizacionBBDD } from "../models/errores/ErrorActualizacionBBDD";
import { ErrorConsultaBBDD } from "../models/errores/ErrorConsultaBBDD";
import { ErrorEntidadNoEncontradaBBDD } from "../models/errores/ErrorEntidadNoEncontradaBBDD";

export abstract class LABMRepository<T extends ObjectLiteral, K> {
    
    constructor(
        protected nombreColumnaId : string,
        protected repository : Repository<T>,
        protected nombreEntidad : string,
    ) {}

    /**
     * Obtiene una entidad por ID
     * @throws ErrorEntidadNoEncontradaBBDD
     * @param id 
     * @returns 
     */
    protected async getById ( id : K ) {
        
        try {
            return await this.repository.createQueryBuilder("entity")
                        .where( `entity.${this.nombreColumnaId} = :id`, { id } )
                        .getOne();
        } catch (error) {
            throw new ErrorEntidadNoEncontradaBBDD( this.nombreEntidad, [this.nombreColumnaId], [id], error );
        }

    }

    /**
     * Obtiene todas las entidades del tipo dado
     * @throws ErrorConsultaBBDD
     * @returns T[]
     */
    protected async getAll () {
        
        try {
            return await this.repository.find();
        } catch (error) {
            throw new ErrorConsultaBBDD(error);
        }

    }

    /**
     * Guarda una entidad
     * @throws ErrorActualizacionBBDD
     * @param entity 
     * @returns 
     */
    protected async save ( entity : T ) {
        
        try {
            return await this.repository.save( entity );
        } catch (error) {
            throw new ErrorActualizacionBBDD(error);
        }

    }

    /**
     * Realiza un "softRemove" de una entidad (solo establece su fecha de borrado)
     * @throws ErrorActualizacionBBDD
     * @param entity 
     * @returns 
     */
    protected async delete ( entity : T ) {

        try {
            return await this.repository.softRemove( entity );
        } catch (error) {
            throw new ErrorActualizacionBBDD(error);
        }

    }

}