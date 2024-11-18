import { CategoriaInsumoDTO } from "./maquinaDto";

export interface InsumoDTO {
    insumo_id?: number;
	nombre?: string;
	descripcion?: string;
	unidad_medida?: string;
	marca?: string;
	precio_xunidad?: number;
	cantidad_total?: number;
	coste_insumo?: number;
	categoria_insumo?: CategoriaInsumoDTO;
	activo?: boolean;
}
