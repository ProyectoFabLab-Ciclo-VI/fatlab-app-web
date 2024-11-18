import { MaquinaImpresiones3DDTO, PapeleriaPloteoDTO } from "./categoriaMaquinaDto";

export interface MaquinaDTO {
    maquina_id?: number;
    nombre?: string;
    codigo_upeu?: string;
    coste_maquina?: number;
    coste_amortizacion?: number;
    activo?: boolean;
    categoria_insumo?: CategoriaInsumoDTO;
    estado_maquina?: EstadoMaquinaDTO;
    maquina_impresiones3d?: MaquinaImpresiones3DDTO;
    papeleria_ploteo?: PapeleriaPloteoDTO;
}

export interface CategoriaInsumoDTO {
    categoria_insumo_id?: number;
    nombre?: string;
}

export interface EstadoMaquinaDTO {
    estado_maquina_id?: number;
    nombre?: string;
}
