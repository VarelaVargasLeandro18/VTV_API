import { AbstractNormalError } from "./AbstractNormalError";

export class ErrorConsultaBBDD extends AbstractNormalError {
    constructor(
        childError? : unknown
    ) {
        super(
            "Se ha producido un error al consultar la Base de Datos.",
            "ErrorConsultaBBDD",
            childError
        );
    }
}