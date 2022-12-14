import Joi from 'joi';
import { fmtFecha } from './formatos';
import { separarValoresPorComa } from './stringUtils';

export const campoRequerido = (campo : string) => `El campo '${campo}' es requerido.`;
export const campoNoPuedeEstarVacio = (campo : string) => `El campo '${campo}' no puede estar vacío.`;
export const campoTipoIncorrecto = (campo : string, tipoRequerido : string) => `El campo '${campo}' debe ser del tipo '${tipoRequerido}'.`;
export const campoEntreValores = (campo : string, min : string | number, max : string | number) => `El campo '${campo} debe encontrarse entre los valores '${min}' y '${max}'.`;
export const campoLargoMinimo = (campo : string, min : number) => `El campo '${campo}' debe tener ${min} o más caracteres.`;
export const campoLargoMaximo = (campo : string, max : number) => `El campo '${campo}' debe hasta ${max} caracteres.`;
export const campoNoEsEmail = (campo : string) => `El campo '${campo}' no es un email válido.`;
export const campoNoCorrespondeAValores = (campo : string, valores : string[]) => `El campo '${campo}' solo puede tomar uno de los siguientes valores: ${separarValoresPorComa(valores)}`;
export const campoNoCumpleFormatoFecha = (campo : string) => `El campo '${campo}' no cumple con el formato de fecha ${fmtFecha}`;

export const obtenerMensajesJoiValidacion = (error : Joi.ValidationError) => error.details.map( err => err.message )