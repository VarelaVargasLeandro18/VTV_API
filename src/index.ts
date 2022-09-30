import express from "express";
import { AppDataSource } from "./AppDataSource";
import login from "./controllers/login.controller";
import { errorLogger, errorResponder } from "./middlewares/errorHandlers";
import { requestIdMW } from "./middlewares/requestId";

//#region Conexión a Base de Datos:
if ( !AppDataSource.isInitialized ) {
    AppDataSource.initialize()
        .then( value => console.log(value) )
        .catch( error => console.error( error ) )
}
//#endregion

const app = express();

//#region Configuración de rutas y Middlewares
    // #region Middlewares Previos
    app.use( express.urlencoded( { extended: false } ) );
    app.use( express.json() );
    app.use( requestIdMW );
    // #endregion
    
    // #region Rutas
    app.use(login);
    // #endregion

    // #region Middlewares siguientes o de error
    app.use( errorLogger );

    app.use( errorResponder );
    // #endregion
//#endregion

//#region Endpoints config
app.get( '/', (req, res) => {
    res.send('Bienvenido!');
} );

app.listen( 8080, () => {
    console.log('Conectado!');
} );
//#endregion