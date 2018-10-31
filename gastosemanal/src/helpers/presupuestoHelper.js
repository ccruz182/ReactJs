export const validarPresupuesto = presupuesto => {
  let totalPresupuesto = parseInt(presupuesto, 10) || 0;

  if (totalPresupuesto > 0) {
    return totalPresupuesto;
  } else {
    return false;
  }
}