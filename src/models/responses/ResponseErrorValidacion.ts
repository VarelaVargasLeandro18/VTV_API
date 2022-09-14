export class ResponseErrorValidacion {

    constructor(
        public requestId : string,
        public errores: string[],
    ){}

}