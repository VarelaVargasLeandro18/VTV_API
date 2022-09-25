import { NextFunction, Request, Response } from "express";
import { ErrorMWResponse } from "../models/responses/ErrorMWResponse";

export const errorLogger = (error : ErrorMWResponse, req : Request, res : Response, next : NextFunction) => {

    console.error( `
        || ERROR EN REQUEST ||
        * ${error} *
        || FIN ERROR EN REQUEST ||
    ` );

    next(error);
}

export const errorResponder = (error : ErrorMWResponse, req : Request, res : Response, next : NextFunction) => {
    return res.status( error.httpStatusCode ).json( error.response );
}