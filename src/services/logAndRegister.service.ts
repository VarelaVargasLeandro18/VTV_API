import jwt from "jsonwebtoken";
import { Inspector } from "../models/entities/Inspector";
import { ErrorConflictoBBDD } from "../models/errores/ErrorConflictoBBDD";
import { ErrorEntidadNoEncontradaBBDD } from "../models/errores/ErrorEntidadNoEncontradaBBDD";
import { InspectorRepository } from "../repositories/usuario.repository";

const SECRET_TOKEN = process.env.SECRET_TOKEN || "TOPSECRETVITEH";
const ALGORITHM_TOKEN : jwt.Algorithm = process.env.ALGORITHM_TOKEN as jwt.Algorithm || "HS256";

/**
 * Esta función se encargará de registrar al inspector dado.
 * @throws ErrorConflictoBBDD
 * @throws ErrorActualizacionBBDD
 * @param inspector 
 */
export const registrar = async (inspector : Inspector) => {
    const inspectorRepository = new InspectorRepository();
    const inspectorEncontrado = await inspectorRepository.getByEmail( inspector.email );

    if ( inspectorEncontrado ) {
        throw new ErrorConflictoBBDD( "Inspector", ["email"], [inspector.email] )
    }

    await inspectorRepository.saveInspector( inspector );

}

/**
 * Esta función se encargará de verificar al inspector dado y retornar un JWT válido por una hora.
 * @throws ErrorConsultaBBDD
 * @throws ErrorEntidadNoEncontradaBBDD
 * @param inspector 
 * @returns 
 */
export const login = async (inspector : Inspector) => {
    const inspectorRepository = new InspectorRepository();
    const inspectorEncontrado = await inspectorRepository.getByEmailAndContrasenia( inspector.email, inspector.contrasenia );

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