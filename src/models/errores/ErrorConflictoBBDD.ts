import { separarValoresPorComa } from "../../utils/stringUtils";
import { AbstractNormalError } from "./AbstractNormalError";

export class ErrorConflictoBBDD extends AbstractNormalError {

    constructor(
        nombreEntidad : string,
        nombresCampos : string[],
        valoresCampos : any[],
        childError? : unknown
    ) {
        super(
            `Ya existe una entidad del tipo '${nombreEntidad}', con el/los campo/s '${separarValoresPorComa(nombresCampos)}' con valor/es ${separarValoresPorComa(valoresCampos)} respectivamente.`,
            "ErrorConflictoBBDD",
            childError
        );
    }

}