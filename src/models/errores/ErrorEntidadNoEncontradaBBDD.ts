import { separarValoresPorComa } from "../../utils/stringUtils";
import { AbstractNormalError } from "./AbstractNormalError";

export class ErrorEntidadNoEncontradaBBDD extends AbstractNormalError {

    constructor(
        nombreEntidad : string,
        nombresCampos : string[],
        valoresCampos : any[],
        childError? : unknown
    ) {
        super (
            `No se ha encontrado la entidad del tipo ${nombreEntidad} con el/los campo/s ${separarValoresPorComa(nombresCampos)} con valor/es ${separarValoresPorComa(valoresCampos)} respectivamente. `,
            "ErrorEntidadNoEncontradaBBDD",
            childError
        )
    }

}