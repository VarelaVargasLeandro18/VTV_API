import { IConstantsOfErrors } from "../models/IConstantsOfErrors";

export const HEADERS = {
    HEADER_REQUEST_ID: "Request-Id",
};

export const API_ERRORS : IConstantsOfErrors = {

    //#region REGISTRO
    USUARIO_YA_REGISTRADO: {
        codigo: 1000,
        mensaje: "Este usuario ya se encuentra registrado."
    },
    ERROR_AL_REGISTRAR: {
        codigo: 1001,
        mensaje: "Error interno al registrar usuario."
    }
    //#endregion

}