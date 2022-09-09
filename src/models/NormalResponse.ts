import { IError } from "./IError";

export class NormalResponse {

    constructor(
        requestId : string,
        errores : IError[]
    ) {}

}