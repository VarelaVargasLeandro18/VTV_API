/**
 * Lo más conveniente es persistir esta información en otra tabla ya que podría llegar a sufrir cambios, pero
 * por cuestiones de simpleza se opto por esta aproximación
 */
 export enum ESTADOS {
    APTO = "Apto",
    CONDICIONAL = "Condicional",
    RECHAZADO = "Rechazado"
}

export const valoresEstados = [...Object.values(ESTADOS)];