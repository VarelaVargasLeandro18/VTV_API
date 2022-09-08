import express from 'express';
import jwt from 'jsonwebtoken';
import HttpStatus from "http-status-codes";

import { AppDataSource } from '../AppDataSource';
import { Usuario } from '../models/usuario';

const SECRET_TOKEN = process.env.SECRET_TOKEN || "TOPSECRETVITEH";

const router = express.Router();

router.post( '/login', (req, res) => {
    const { email, password } : Usuario = req.body;

    const token = jwt.sign({
        email
    }, SECRET_TOKEN);

    res
        .header( 'auth-token', token )
        .json({
            data: {token}
        });
} );

router.post( '/register', async (req, res) => {
    const usuario : Usuario = req.body;

    const usuarioRepository = AppDataSource.getRepository( Usuario );
    
    const usuarioEncontrado = await usuarioRepository.findOneBy( {
        email: usuario.email
    } );

    if ( usuarioEncontrado ) {
        return res.json({
            error: true,
            msg: "Usuario Encontrado"
        }).status( HttpStatus.CONFLICT );
    }

    try {
        await usuarioRepository.save( usuario );
    } catch ( error ) {
        return res.json({
            error: true,
            msg: "El usuario no pudo ser creado"
        }).status( HttpStatus.INTERNAL_SERVER_ERROR );
    }

    return res.json({
        error: false,
        msg: ""
    }).status( HttpStatus.CREATED );

} );

export default router;