import { Mapper } from "../base/mapper";
import { InsumoDTO } from "../entities/insumoDto";
import { Insumo } from "../models/insumo";

export class InsumoMapper extends Mapper<InsumoDTO, Insumo> {
    override mapFrom(entity: InsumoDTO): Insumo {
        return {
            id: entity.insumo_id ? entity.insumo_id : 0,
            nombre: entity.nombre ? entity.nombre : '',
            descripcion: entity.descripcion ? entity.descripcion : '',
            unidadMedida: entity.unidad_medida ? entity.unidad_medida : '',
            activo: entity.activo != undefined ? entity.activo : false,
        };
    }

    override mapTo(model: Insumo): InsumoDTO {
        return {
            insumo_id: model.id != 0 ? model.id : undefined,
            nombre: model.nombre != '' ? model.nombre : undefined,
            descripcion: model.descripcion != '' ? model.descripcion : undefined,
            unidad_medida: model.unidadMedida != '' ? model.unidadMedida : undefined,
            activo: model.activo ? model.activo : undefined,
        }
    }
}