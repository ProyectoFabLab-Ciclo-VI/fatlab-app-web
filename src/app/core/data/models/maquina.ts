import { MaquinaImpresiones3D, PapeleriaPloteo } from "./categoriaMaquina";

export type CategoriaMaquina = 'Impresiones 3D' | 'Papelería / Ploteo' | 'Laser 3D' | 'Escaneo 3D'

export interface Maquina {
    id: number;
    nombre: string;
    codigoUpeu: string;
    categoriaInsumo: CategoriaInsumo | null;
    estadoMaquina: EstadoMaquina | null;
    costeAmortizacion: number;
    costeMaquina: number;
    categoriaMaquina: {
        categoria: CategoriaMaquina;
        maquina3D: MaquinaImpresiones3D | null;
    };
    isDelete: boolean;
}

export interface CategoriaInsumo {
    id: number;
    nombre: string;
}

export interface EstadoMaquina {
    id: number;
    nombre: string;
}