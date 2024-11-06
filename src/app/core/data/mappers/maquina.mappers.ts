import { Mapper } from "../base/mapper";
import { MaquinaDTO } from "../entities/maquinaDto";
import { Maquina } from "../models/maquina";

export class MaquinaMapper extends Mapper<MaquinaDTO,Maquina> {
    override mapFrom(entity: MaquinaDTO): Maquina {
        return {
            id:         entity.maquina_id ?? 0,
            nombre:     entity.nombre ?? '',
            codigoUpeu: entity.codigo_upeu ?? '',
            isDelete:   entity.activo ?? false,
        };
    }
    override mapTo(model: Maquina): MaquinaDTO {
        return {
            maquina_id: model.id != 0 ? model.id : undefined,
            nombre:     model.nombre != '' ? model.nombre : undefined,
            codigo_upeu: model.codigoUpeu != '' ? model.codigoUpeu : undefined,
            activo:     model.isDelete ? model.isDelete : undefined,
        }
    }

}