export interface MaquinaImpresiones3D {
    id: number;
    tipoInyeccion: string;
    costeLuzPorHora: number;
    arquitectura: string;
    porcentajeDesperdicio: number;
}

export interface PapeleriaPloteo {
    papeleriaPloteoId: number;
    tipoTinta: string;
}