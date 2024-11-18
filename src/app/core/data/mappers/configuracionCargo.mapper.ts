import { MapperHelper } from "../../index.helper";
import { Mapper } from "../base/mapper";
import { CargoDTO, ConfiguracionCargoDTO } from "../entities/ConfiguracionCargo";
import { Cargo, ConfiguracionCargo } from "../models/ConfiguracionCargo";

export class ConfiguracionCargoMapper extends Mapper<ConfiguracionCargoDTO, ConfiguracionCargo> {
    private mapperHelper: MapperHelper = new MapperHelper();
    private cargoMapper: CargoMapper = new CargoMapper();

    override mapFrom(entity: ConfiguracionCargoDTO): ConfiguracionCargo {
        return {
            id: this.mapperHelper.numberMapFrom(entity.configuracion_cargo_id),
            igv: entity.igv != undefined ? entity.igv : false,
            manoObra: entity.mano_obra != undefined ? entity.mano_obra : false,
            cargo: this.mapperHelper.objectMapFrom(entity.cargo, this.cargoMapper)
        }
    }
    override mapTo(model: ConfiguracionCargo): ConfiguracionCargoDTO {
        return {
            configuracion_cargo_id: this.mapperHelper.numberMapTo(model.id),
            igv: model.igv,
            mano_obra: model.manoObra,
            cargo: this.mapperHelper.objectMapTo(model.cargo, this.cargoMapper),
        }
    }

}

export class CargoMapper extends Mapper<CargoDTO, Cargo> {
    private mapperHelper: MapperHelper = new MapperHelper();

    override mapFrom(entity: CargoDTO): Cargo {
        return {
            id: this.mapperHelper.numberMapFrom(entity.cargo_id),
            nombre: this.mapperHelper.stringMapFrom(entity.nombre),
        }
    }
    override mapTo(model: Cargo): CargoDTO {
        return {
            cargo_id: this.mapperHelper.numberMapTo(model.id),
            nombre: this.mapperHelper.stringMapTo(model.nombre),
        }
    }

}