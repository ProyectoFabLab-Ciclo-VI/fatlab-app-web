import { MapperHelper } from "../../index.helper";
import { Mapper } from "../base/mapper";
import { CategoriaInsumoDTO } from "../entities/maquinaDto";
import { CategoriaInsumo } from "../models/maquina";

export class CategoriaInsumoMapper extends Mapper<CategoriaInsumoDTO, CategoriaInsumo> {
    private mapperHelper: MapperHelper = new MapperHelper();

    override mapFrom(entity: CategoriaInsumoDTO): CategoriaInsumo {
        return {
            id: this.mapperHelper.numberMapFrom(entity.categoria_insumo_id),
            nombre: this.mapperHelper.stringMapFrom(entity.nombre),
        }
    }
    
    override mapTo(model: CategoriaInsumo): CategoriaInsumoDTO {
        return {
            categoria_insumo_id: this.mapperHelper.numberMapTo(model.id),
            nombre: this.mapperHelper.stringMapTo(model.nombre),
        }
    }

}