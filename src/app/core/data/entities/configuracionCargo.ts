export interface ConfiguracionCargoDTO {
    configuracion_cargo_id?: number;
    igv?: boolean;
    mano_obra?: boolean;
    cargo?: CargoDTO | null;
}

export interface CargoDTO {
    cargo_id?: number;
    nombre?:   string;
}
