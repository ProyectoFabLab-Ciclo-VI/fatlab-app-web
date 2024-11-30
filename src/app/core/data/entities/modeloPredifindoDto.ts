import { InsumoDTO } from "./insumoDto";

export interface ModeloPredefinidoDTO {
    modelo_predefinido_id?: number;
    nombre?: string;
    codigo?: string;
    comentario?: string;
    precio?: number;
    imagen1?: string;
    imagen2?: string;
    imagen3?: string;
    imagen4?: string;
    insumo?: InsumoDTO | null;
}
