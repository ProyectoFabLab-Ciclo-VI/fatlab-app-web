export interface ConfiguracionCargo {
    id: number;
    igv: boolean;
    manoObra: boolean;
    cargo: Cargo | null;
}

export interface Cargo {
    id: number;
    nombre:   string;
}
