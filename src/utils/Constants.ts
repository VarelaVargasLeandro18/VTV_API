import { IConstantsOfErrors } from "../models/IConstantsOfErrors";

export const HEADERS = {
    HEADER_REQUEST_ID: "Request-Id",
};

export const API_ERRORS : IConstantsOfErrors = {

    ERROR_INTERNO: {
        codigo: 1000,
        mensaje: "Error interno al realizar la petición."
    },

    //#region REGISTRO
    USUARIO_YA_REGISTRADO: {
        codigo: 1100,
        mensaje: "Este usuario ya se encuentra registrado."
    },
    //#endregion

    //#region LOGIN
    USUARIO_NO_ENCONTRADO: {
        codigo: 1200,
        mensaje: "El usuario especificado no existe."
    },
    //#endregion

}