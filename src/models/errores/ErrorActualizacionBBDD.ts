import { AbstractNormalError } from "./AbstractNormalError";

export class ErrorActualizacionBBDD extends AbstractNormalError {

    constructor(
        childError? : unknown
    ) {
        super(
            "Se ha producido un error al actualizar la Base de Datos.",
            "ErrorActualizacionBBDD",
            childError
        );
    }

}