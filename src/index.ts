import "reflect-metadata";
import express from "express";
import login from "./controllers/login/login.controller";
import { AppDataSource } from "./AppDataSource";
import { requestIdMW } from "./middlewares/requestId";

//#region Conexión a Base de Datos:
if ( !AppDataSource.isInitialized ) {
    AppDataSource.initialize()
        .then( value => console.log(value) )
        .catch( error => console.error( error ) );
}
//#endregion

const app = express();


//#region Configuración de Middlewares
    // # Body Parser JSON:
    app.use( express.urlencoded( { extended: false } ) );
    app.use( express.json() );

    // # Request ID Middleware:
    app.use( requestIdMW );
//#endregion

//#region Endpoints config
app.get( '/', (req, res) => {
    res.send('Bienvenido!');
} );

app.listen( 8080, () => {
    console.log('Conectado!');
} );

app.use(login);
//#endregion