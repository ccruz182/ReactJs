import { MOSTRAR_ERROR, VALIDAR_FORMULARIO } from "../actions/types";

export const validarFormulario = estado => {
  return {
    type: VALIDAR_FORMULARIO, 
    payload: estado
  }
};
