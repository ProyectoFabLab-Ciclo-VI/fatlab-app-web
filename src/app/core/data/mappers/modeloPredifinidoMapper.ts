import { ModeloPredefinidoDTO } from "@core/index.data.entities";
import { Mapper } from "../base/mapper";
import { ModeloPredefinido } from "../models/modeloPredifinido";
import { MapperHelper } from "@core/index.helper";
import { InsumoMapper } from "./insumo.mappers";

export class ModeloPredefinidoMapper extends Mapper<ModeloPredefinidoDTO, ModeloPredefinido> {
    private mapperHelper: MapperHelper = new MapperHelper();
    private insumoMapper: InsumoMapper = new InsumoMapper();

    override mapFrom(entity: ModeloPredefinidoDTO): ModeloPredefinido {
        return {
            id: this.mapperHelper.numberMapFrom(entity.modelo_predefinido_id),
            codigo: this.mapperHelper.stringMapFrom(entity.codigo),
            comentario: this.mapperHelper.stringMapFrom(entity.comentario),
            img1: this.mapperHelper.stringMapFrom(entity.imagen1),
            img2: this.mapperHelper.stringMapFrom(entity.imagen2),
            img3: this.mapperHelper.stringMapFrom(entity.imagen3),
            img4: this.mapperHelper.stringMapFrom(entity.imagen4),
            insumo: this.mapperHelper.objectMapFrom(entity.insumo, this.insumoMapper),
            nombre: this.mapperHelper.stringMapFrom(entity.nombre),
            precio: this.mapperHelper.numberMapFrom(entity.precio),
        };
    }
    override mapTo(model: ModeloPredefinido): ModeloPredefinidoDTO {
        return {
            modelo_predefinido_id: this.mapperHelper.numberMapTo(model.id),
            codigo: this.mapperHelper.stringMapTo(model.codigo),
            comentario: this.mapperHelper.stringMapTo(model.comentario),
            imagen1: this.mapperHelper.stringMapTo(model.img1),
            imagen2: this.mapperHelper.stringMapTo(model.img2),
            imagen3: this.mapperHelper.stringMapTo(model.img3),
            imagen4: this.mapperHelper.stringMapTo(model.img4),
            insumo: this.mapperHelper.objectMapTo(model.insumo, this.insumoMapper),
            nombre: this.mapperHelper.stringMapTo(model.nombre),
            precio: this.mapperHelper.numberMapTo(model.precio),
        };
    }
}