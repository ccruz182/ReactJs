export function diferencia_anios(anio_base, anio_sel) {
  return anio_base - anio_sel;
}

export function descuento_vejez(costo, anios) {
  for (let i = 0; i < anios; i++) {
    costo *= 0.97;
  }

  return costo;
}

export function ajuste_origen(costo, origen) {
  /*
  Origen
  1: americano (+15%), 2: europeo (+10%), 3: asiático (+5%)
  */
  const ajustes = [1.15, 1.05, 1.10];
  
  return costo * ajustes[origen - 1];
}

export function ajuste_cobertura(costo, cobertura) {
  /*
  Cobertura
  1: básico (+20%), 2: completo (+50%)
  */

  const ajustes = [1.20, 1.50];

  return costo * ajustes[cobertura - 1];
}