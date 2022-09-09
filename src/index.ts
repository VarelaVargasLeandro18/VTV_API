import "reflect-metadata";
import express from "express";
import login from "./login/login.controller";
import { AppDataSource } from "./AppDataSource";
import { randomUUID } from "crypto";
import { HEADERS } from "./utils/Constants";

const app = express();

if ( !AppDataSource.isInitialized ) {
    AppDataSource.initialize()
        .then( value => console.log(value) )
        .catch( error => console.error( error ) );
}

// # ID de Petición:
app.use( (req, res, next) => {
    res.setHeader( HEADERS.HEADER_REQUEST_ID, randomUUID() );
    next()
} );
 
// # Body Parser JSON:
app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

app.get( '/', (req, res) => {
    res.send('Bienvenido!');
} );

app.listen( 8080, () => {
    console.log('Conectado!');
} );

app.use(login);