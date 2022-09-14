import express from 'express';
import HttpStatus from 'http-status-codes';
import { NormalResponse } from '../../models/responses/NormalResponse';
import { API_ERRORS, HEADERS } from '../../utils/Constants';

import { Inspector, inspectoresSchemaLogIn, inspectoresSchemaRegistro } from '../../models/entities/Inspector';
import { ErrorActualizacionBBDD } from '../../models/errores/ErrorActualizacionBBDD';
import { ErrorConflictoBBDD } from '../../models/errores/ErrorConflictoBBDD';
import { ErrorConsultaBBDD } from '../../models/errores/ErrorConsultaBBDD';
import { ErrorEntidadNoEncontradaBBDD } from '../../models/errores/ErrorEntidadNoEncontradaBBDD';
import { ResponseErrorValidacion } from '../../models/responses/ResponseErrorValidacion';
import { login, registrar } from '../../services/logAndRegister.service';
import { obtenerMensajesJoiValidacion } from '../../utils/mensajesDeValidacion';

const router = express.Router();

router.post( '/login', async (req, res) => {
    const REQUEST_ID = res.getHeader( HEADERS.HEADER_REQUEST_ID ) as string;
    const inspector : Inspector = req.body;
    let jwt = "";

    const joiError = inspectoresSchemaLogIn.validate( inspector ).error;

    if ( joiError ) {
        return res.status( HttpStatus.BAD_REQUEST ).json(
            new ResponseErrorValidacion( REQUEST_ID, obtenerMensajesJoiValidacion( joiError ) )
        );
    }

    try {
        jwt = await login( inspector );
    } catch ( error ) {
        console.error( error );

        if ( error instanceof ErrorConsultaBBDD ) {
            return res.status( HttpStatus.INTERNAL_SERVER_ERROR ).json(
                new NormalResponse( REQUEST_ID, [ API_ERRORS.ERROR_INTERNO ] )
            );
        }

        if ( error instanceof ErrorEntidadNoEncontradaBBDD ) {
            return res.status( HttpStatus.NOT_FOUND ).json(
                new NormalResponse( REQUEST_ID, [ API_ERRORS.USUARIO_NO_ENCONTRADO ] )
            );
        }

    }

    return res.status( HttpStatus.OK ).setHeader("auth-token", jwt).json(
        new NormalResponse( REQUEST_ID, [] )
    );

} );

router.post( '/register', async (req, res) => {
    const REQUEST_ID = res.getHeader( HEADERS.HEADER_REQUEST_ID ) as string;
    const inspector : Inspector = req.body;

    const joiError = inspectoresSchemaRegistro.validate( inspector ).error;

    if ( joiError ) {
        console.error( joiError )
        return res.status( HttpStatus.BAD_REQUEST ).json(
            new ResponseErrorValidacion( REQUEST_ID, obtenerMensajesJoiValidacion( joiError ) )
        );
    }

    try {
        await registrar( inspector );
    } catch ( error ) {
        console.error( error );

        if ( error instanceof ErrorConflictoBBDD ) {
            return res.status( HttpStatus.CONFLICT ).json(
                new NormalResponse( REQUEST_ID, [ API_ERRORS.USUARIO_YA_REGISTRADO ] )
            );
        }

        if ( error instanceof ErrorActualizacionBBDD ) {
            return res.status( HttpStatus.INTERNAL_SERVER_ERROR ).json(
                new NormalResponse( REQUEST_ID, [ API_ERRORS.ERROR_INTERNO ] )
            );
        }

    }

    return res.status( HttpStatus.CREATED ).json(
        new NormalResponse( REQUEST_ID, [] )
    );

} );

export default router;