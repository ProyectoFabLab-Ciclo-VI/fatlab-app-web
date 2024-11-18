export interface MaquinaImpresiones3DDTO {
    maquina_impresiones3d_id?: number;
    tipo_inyeccion?: string;
    coste_luzxhora?: number;
    arquitectura?: string;
    porcentaje_desperdicio?: number;
}

export interface PapeleriaPloteoDTO {
    papeleria_ploteo_id?: number;
    tipo_tinta?: string;
}