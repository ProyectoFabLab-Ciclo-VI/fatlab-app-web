import { MapperHelper } from "../../index.helper";
import { Mapper } from "../base/mapper";
import { MaquinaDTO } from "../entities/maquinaDto";
import { MaquinaImpresiones3D, PapeleriaPloteo } from "../models/categoriaMaquina";
import { CategoriaMaquina, Maquina } from "../models/maquina";
import { CategoriaInsumoMapper } from "./categoriaInsumoMapper";
import { CategoriaImpresion3DMapper, CategoriaPloteoMapper } from "./categoriaMaquina.mappers";
import { EstadoMaquinaMapper } from "./estadoMaquina.mappers";

export class MaquinaMapper extends Mapper<MaquinaDTO,Maquina> {
    private mapperHelper : MapperHelper = new MapperHelper();
    private estadoMaquinaMapper: EstadoMaquinaMapper = new EstadoMaquinaMapper();
    private categoriaInsumoMapper: CategoriaInsumoMapper = new CategoriaInsumoMapper();
    private impresora3dMapper: CategoriaImpresion3DMapper = new CategoriaImpresion3DMapper();

    override mapFrom(entity: MaquinaDTO): Maquina {
        return {
            id:                 this.mapperHelper.numberMapFrom(entity.maquina_id),
            nombre:             this.mapperHelper.stringMapFrom(entity.nombre),
            codigoUpeu:         this.mapperHelper.stringMapFrom(entity.codigo_upeu),
            costeAmortizacion:  this.mapperHelper.numberMapFrom(entity.coste_amortizacion),
            costeMaquina:       this.mapperHelper.numberMapFrom(entity.coste_maquina),
            estadoMaquina:      this.mapperHelper.objectMapFrom(entity.estado_maquina, this.estadoMaquinaMapper),
            categoriaInsumo:    this.mapperHelper.objectMapFrom(entity.categoria_insumo,this.categoriaInsumoMapper),
            categoriaMaquina:   this.defineCategoriaMaquinaFrom(entity),
            isDelete:           entity.activo ?? false,
        };
    }
    override mapTo(model: Maquina): MaquinaDTO {
        return {
            maquina_id:  this.mapperHelper.numberMapTo(model.id),
            nombre:      this.mapperHelper.stringMapTo(model.nombre),
            codigo_upeu: this.mapperHelper.stringMapTo(model.codigoUpeu),
            categoria_insumo: this.mapperHelper.objectMapTo(model.categoriaInsumo, this.categoriaInsumoMapper),
            coste_amortizacion: this.mapperHelper.numberMapTo(model.costeAmortizacion),
            coste_maquina: this.mapperHelper.numberMapTo(model.costeMaquina),
            maquina_impresiones3d: model.categoriaMaquina.categoria == 'Impresiones 3D' && model.categoriaMaquina.maquina3D != null ? this.impresora3dMapper.mapTo(model.categoriaMaquina.maquina3D) : undefined,
            activo:      model.isDelete,
        }
    }

    private defineCategoriaMaquinaFrom(entity: MaquinaDTO): { categoria: CategoriaMaquina, maquina3D: MaquinaImpresiones3D | null } {
        if(entity.maquina_impresiones3d) {
            return { categoria: 'Impresiones 3D', maquina3D: this.impresora3dMapper.mapFrom(entity.maquina_impresiones3d) }
        }

        return { categoria: 'Impresiones 3D', maquina3D: null }
    }
}