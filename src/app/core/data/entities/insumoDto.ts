export interface InsumoDTO {
    insumo_id?: number;
	nombre?: string;
	descripcion?: string;
	unidad_medida?: string;
	activo?: boolean;
	marca?: Marca;
}

interface Marca {
    marca_id: number;
}