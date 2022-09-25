import { IError } from "./IError";

export class NormalResponse {

    constructor(
        public requestId : string,
        public errores : IError[]
    ) {}

    public toString() {
        return `RequestId: ${this.requestId}, Errores: [${this.errores.map( error => `Código: ${error.codigo}, Mensaje: ${error.mensaje}` ).join( ", " )}]`;
    }

}