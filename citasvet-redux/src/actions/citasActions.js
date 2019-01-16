import { AGREGAR_CITA, BORRAR_CITA, MOSTRAR_CITAS } from "./types";

export const getCitas = () => {
  return {
    type: MOSTRAR_CITAS
  };
};

export const agregarCita = cita => {
  return {
    type: AGREGAR_CITA,
    payload: cita
  };
};

export const borrarCita = id => {
  return {
    type: BORRAR_CITA, 
    payload: id
  };
}
