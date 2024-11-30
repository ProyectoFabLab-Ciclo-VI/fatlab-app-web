import { Insumo } from "./insumo";

export interface ModeloPredefinido {
    id: number;
    nombre: string;
    codigo: string;
    comentario: string;
    precio: number;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    insumo: Insumo | null;
}
