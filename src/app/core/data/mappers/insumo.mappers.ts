import { MapperHelper } from "../../index.helper";
import { Mapper } from "../base/mapper";
import { InsumoDTO } from "../entities/insumoDto";
import { Insumo } from "../models/insumo";
import { CategoriaInsumoMapper } from "./categoriaInsumoMapper";

export class InsumoMapper extends Mapper<InsumoDTO, Insumo> {
    private mapperHelper: MapperHelper = new MapperHelper();
    private categoriaInsumoMapper: CategoriaInsumoMapper = new CategoriaInsumoMapper();

    override mapFrom(entity: InsumoDTO): Insumo {
        return {
            id:             this.mapperHelper.numberMapFrom(entity.insumo_id),
            nombre:         this.mapperHelper.stringMapFrom(entity.nombre),
            descripcion:    this.mapperHelper.stringMapFrom(entity.descripcion),
            unidadMedida:   this.mapperHelper.stringMapFrom(entity.unidad_medida),
            cantidadTotal:  this.mapperHelper.numberMapFrom(entity.cantidad_total),
            categoriaInsumo:this.mapperHelper.objectMapFrom(entity.categoria_insumo,this.categoriaInsumoMapper),
            costeInsumo:    this.mapperHelper.numberMapFrom(entity.coste_insumo),
            marca:          this.mapperHelper.stringMapFrom(entity.marca),
            precioUnitario: this.mapperHelper.numberMapFrom(entity.precio_xunidad),
            activo:         entity.activo ?? false,
        };
    }

    override mapTo(model: Insumo): InsumoDTO {
        return {
            insumo_id: this.mapperHelper.numberMapTo(model.id),
            nombre: this.mapperHelper.stringMapTo(model.nombre),
            descripcion: this.mapperHelper.stringMapTo(model.descripcion),
            unidad_medida: this.mapperHelper.stringMapTo(model.unidadMedida),
            cantidad_total: this.mapperHelper.numberMapTo(model.cantidadTotal),
            coste_insumo: this.mapperHelper.numberMapTo(model.costeInsumo),
            precio_xunidad: this.mapperHelper.numberMapTo(model.precioUnitario),
            marca: this.mapperHelper.stringMapTo(model.marca),
            categoria_insumo: this.mapperHelper.objectMapTo(model.categoriaInsumo, this.categoriaInsumoMapper),
            activo: model.activo,
        }
    }
}