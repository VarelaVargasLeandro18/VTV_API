export const campoRequerido = (campo : string) => `El campo '${campo}' es requerido.`;
export const campoTipoIncorrecto = (campo : string, tipoRequerido : string) => `El campo '${campo}' debe ser del tipo '${tipoRequerido}'.`;
export const campoEntreValores = (campo : string, min : string | number, max : string | number) => `El campo '${campo} debe encontrarse entre los valores '${min}' y '${max}'.`;
export const campoLargoMinimo = (campo : string, min : number) => `El campo '${campo}' debe tener ${min} o más caracteres.`;
export const campoLargoMaximo = (campo : string, max : number) => `El campo '${campo}' debe hasta ${max} caracteres.`;