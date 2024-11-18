import { MapperHelper } from "../../index.helper";
import { Mapper } from "../base/mapper";
import { EstadoMaquinaDTO } from "../entities/maquinaDto";
import { EstadoMaquina } from "../models/maquina";

export class EstadoMaquinaMapper extends Mapper<EstadoMaquinaDTO, EstadoMaquina> {
    private mapperHelper : MapperHelper = new MapperHelper();

    override mapFrom(entity: EstadoMaquinaDTO): EstadoMaquina {
        return {
            id:     this.mapperHelper.numberMapFrom(entity.estado_maquina_id),
            nombre: this.mapperHelper.stringMapFrom(entity.nombre),
        }
    }
    override mapTo(model: EstadoMaquina): EstadoMaquinaDTO {
        return  {
            estado_maquina_id:  this.mapperHelper.numberMapTo(model.id),
            nombre:             this.mapperHelper.stringMapTo(model.nombre),
        }
    }

}