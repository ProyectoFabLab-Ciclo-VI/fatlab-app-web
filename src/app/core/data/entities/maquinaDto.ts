export interface MaquinaDTO {
    maquina_id?: number;
    nombre?: string;
    codigo_upeu?: string;
    activo?: boolean;
    tipo_maquina?: TipoMaquina;
    estado_maquina?: EstadoMaquina;
}

export interface TipoMaquina {
    id?: number;
    descripcion?: string;
}

export interface EstadoMaquina {
    id?: number;
    descripcion?: string;
}
