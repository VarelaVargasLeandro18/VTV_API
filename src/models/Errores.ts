import { separarValoresPorComa } from "../utils/stringUtils";

export class NormalError {
    
    constructor(
        public message : string
    ){}
    
}

export class ErrorConflictoBBDD extends NormalError {

    constructor(
        nombreEntidad : string,
        nombresCampos : string[],
        valoresCampos : any[]
    ) {
        super(`Ya existe una entidad del tipo '${nombreEntidad}', con el/los campo/s '${separarValoresPorComa(nombresCampos)}' con valor/es ${separarValoresPorComa(valoresCampos)} respectivamente.`);
    }

}

export class ErrorActualizacionBBDD extends NormalError {

    constructor(
        public error : unknown
    ) {
        super("Se ha producido un error al actualizar la Base de Datos.");
    }

}

export class ErrorConsultaBBDD extends NormalError {
    constructor(
        public error : unknown
    ) {
        super("Se ha producido un error al consultar la Base de Datos.");
    }
}

export class ErrorEntidadNoEncontradaBBDD extends NormalError {

    constructor(
        nombreEntidad : string,
        nombresCampos : string[],
        valoresCampos : any[]
    ) {
        super (`No se ha encontrado la entidad del tipo ${nombreEntidad} con el/los campo/s ${separarValoresPorComa(nombresCampos)} con valor/es ${separarValoresPorComa(valoresCampos)} respectivamente. `)
    }

}