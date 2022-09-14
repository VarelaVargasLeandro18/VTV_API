import { AppDataSource } from "../AppDataSource";
import { ErrorActualizacionBBDD, ErrorConflictoBBDD, ErrorConsultaBBDD, ErrorEntidadNoEncontradaBBDD } from "../models/Errores";
import { Inspector } from "../models/Inspector";
import jwt from "jsonwebtoken";

const SECRET_TOKEN = process.env.SECRET_TOKEN || "TOPSECRETVITEH";
const ALGORITHM_TOKEN : jwt.Algorithm = process.env.ALGORITHM_TOKEN as jwt.Algorithm || "HS256";

/**
 * Esta función se encargará de registrar al inspector dado.
 * @param inspector 
 */
export const registrar = async (inspector : Inspector) => {
    const inspectorRepository = AppDataSource.getRepository( Inspector );

    const inspectorEncontrado = await inspectorRepository.findOneBy({
        email: inspector.email
    });

    if ( inspectorEncontrado ) {
        throw new ErrorConflictoBBDD( "Inspector", ["email"], [inspector.email] )
    }

    try {
        await inspectorRepository.save( inspector );
    } catch ( error ) {
        throw new ErrorActualizacionBBDD( error );
    }

}

/**
 * Esta función se encargará de verificar al inspector dado y retornar un JWT válido por una hora.
 * @throws ErrorConsultaBBDD
 * @throws ErrorEntidadNoEncontradaBBDD
 * @param inspector 
 * @returns 
 */
export const login = async (inspector : Inspector) => {
    const inspectorRepository = AppDataSource.getRepository( Inspector );
    let inspectorEncontrado;

    try {
        inspectorEncontrado = await inspectorRepository.findOneBy({
            email: inspector.email,
            contrasenia: inspector.contrasenia
        });
    } catch ( error ) {
        throw new ErrorConsultaBBDD( error );
    }

    if ( !inspectorEncontrado ) {
        throw new ErrorEntidadNoEncontradaBBDD( "Inspector", ["email", "contrasenia"], [inspector.email, inspector.contrasenia] );
    }

    return jwt.sign( {
        email: inspector.email,
        nombre: inspector.nombre,
        apellido: inspector.apellido
    }, SECRET_TOKEN, {
        algorithm: ALGORITHM_TOKEN,
        expiresIn: "1h"
    } )

}