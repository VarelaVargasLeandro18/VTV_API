import express from 'express';
import HttpStatus from 'http-status-codes';
import { AppDataSource } from '../../AppDataSource';
import { API_ERRORS, HEADERS } from '../../utils/Constants';
import { NormalResponse } from '../../models/NormalResponse';

import { userRegisterSchema, Usuario } from '../../models/Usuario';
import { ErrorValidacion } from '../../models/ErrorValidacion';
import { obtenerMensajesJoiValidacion } from '../../utils/mensajesDeValidacion';

const SECRET_TOKEN = process.env.SECRET_TOKEN || "TOPSECRETVITEH";

const router = express.Router();

router.post( '/login', (req, res) => {
} );

router.post( '/register', async (req, res) => {
    const REQUEST_ID = res.getHeader( HEADERS.HEADER_REQUEST_ID ) as string;
    const usuario : Usuario = req.body;

    const error = userRegisterSchema.validate( usuario ).error;

    if ( error ) {
        return res.status( HttpStatus.BAD_REQUEST ).json(
            new ErrorValidacion( REQUEST_ID, obtenerMensajesJoiValidacion( error ) )
        );
    }

    const usuarioRepository = AppDataSource.getRepository( Usuario );
    
    const usuarioEncontrado = await usuarioRepository.findOneBy( {
        email: usuario.email
    } );

    if ( usuarioEncontrado ) {
        return res.status( HttpStatus.CONFLICT ).json(
            new NormalResponse( REQUEST_ID, [ API_ERRORS.USUARIO_YA_REGISTRADO ] )
        );
    }

    try {
        await usuarioRepository.save( usuario );
    } catch ( error ) {
        return res.status( HttpStatus.INTERNAL_SERVER_ERROR ).json(
            new NormalResponse( REQUEST_ID, [ API_ERRORS.ERROR_AL_REGISTRAR ] )
        );
    }

    return res.status( HttpStatus.CREATED ).json(
        new NormalResponse( REQUEST_ID, [] )
    );

} );

export default router;