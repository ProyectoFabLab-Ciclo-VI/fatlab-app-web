import { CategoriaInsumo } from "./maquina";

export interface Insumo {
    id: number;
	nombre: string;
	descripcion: string;
	unidadMedida: string;
	marca: string;
	precioUnitario: number;
	cantidadTotal: number;
	costeInsumo: number;
	categoriaInsumo: CategoriaInsumo | null;
	activo: boolean;
}