import { randomUUID } from "crypto";
import { NextFunction, Request, Response } from "express";
import { HEADERS } from "../utils/Constants";

// # ID de Petición:
export const requestIdMW = (req : Request, res : Response, next : NextFunction) => {
    res.setHeader( HEADERS.HEADER_REQUEST_ID, randomUUID() );
    next()
}