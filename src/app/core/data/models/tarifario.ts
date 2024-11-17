export interface DatoPedido {
    cantidadUsada: number;
    tiempoImpresion: number;
    porcentajeGanancia: number;
    porcentajeTasaFallo: number;
    costoOperador: number;
    usarIgv: boolean;
}

export interface DatoConsiderado {
    porcentajeDesperdicioMaquina: number;
    costoInsumo: number;
    costoPorHoraElectricidad: number;
    costoAmortizuacionPorHora: number;
}

export interface DatoCalculadora {
    costoMateriales: number;
    costoAmortizacion: number;
    costoGanancia: number;
    costoOperario: number;
    costoFallo: number;
    costoIgv: number;
    costoTotal: number;
  }