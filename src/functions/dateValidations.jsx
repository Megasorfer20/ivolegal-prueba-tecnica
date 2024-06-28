const validateFechaEmision = (fechaEmision) => {
  const fechaHoy = new Date();
  const fechaAyer = new Date(fechaHoy);
  fechaAyer.setDate(fechaHoy.getDate() - 1);

  if (new Date(fechaEmision) <= fechaAyer) {
    return (
      "La fecha de emisión debe ser posterior a " +
      fechaAyer.toLocaleDateString()
    );
  }

  return null;
};

const validateFechaVencimiento = (fechaVencimiento) => {
  const { fecha_emision, fecha_remision_factura, fecha_recepcion_factura } =
    fetchData;

  if (
    new Date(fechaVencimiento) <= new Date(fecha_emision) ||
    new Date(fechaVencimiento) <= new Date(fecha_remision_factura) ||
    new Date(fechaVencimiento) <= new Date(fecha_recepcion_factura)
  ) {
    return "La fecha de vencimiento debe ser posterior a todas las otras fechas";
  }

  return null;
};

const validateFechaRemision = (fechaRemision) => {
  const { fecha_emision, fecha_recepcion_factura } = fetchData;

  if (new Date(fechaRemision) <= new Date(fecha_emision)) {
    return "La fecha de remisión debe ser posterior a la fecha de emisión";
  }

  if (new Date(fechaRemision) >= new Date(fecha_recepcion_factura)) {
    return "La fecha de remisión debe ser anterior a la fecha de recepción";
  }

  return null;
};

const validateFechaRecepcion = (fechaRecepcion) => {
  const { fecha_remision_factura, fecha_vencimiento } = fetchData;

  if (new Date(fechaRecepcion) <= new Date(fecha_remision_factura)) {
    return "La fecha de recepción debe ser posterior a la fecha de remisión";
  }

  if (new Date(fechaRecepcion) >= new Date(fecha_vencimiento)) {
    return "La fecha de recepción debe ser anterior a la fecha de vencimiento";
  }

  return null;
};

export {
  validateFechaEmision,
  validateFechaVencimiento,
  validateFechaRemision,
  validateFechaRecepcion,
};
