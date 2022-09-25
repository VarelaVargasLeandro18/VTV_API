import { NormalResponse } from "./NormalResponse";
import { ResponseErrorValidacion } from "./ResponseErrorValidacion";

export class ErrorMWResponse extends Error {

    constructor(
        public response : NormalResponse | ResponseErrorValidacion,
        public httpStatusCode : number,
        public child? : Error,
    ) {
        super( `Se ha producido un error con el código ${httpStatusCode} y la response ${response}` )
    }

}