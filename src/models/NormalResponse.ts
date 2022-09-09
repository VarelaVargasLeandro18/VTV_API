import { IError } from "./IError";

export class NormalResponse {

    constructor(
        public requestId : string,
        public errores : IError[]
    ) {}

}