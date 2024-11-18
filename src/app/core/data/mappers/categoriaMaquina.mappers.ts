import { MapperHelper } from "../../index.helper";
import { Mapper } from "../base/mapper";
import { MaquinaImpresiones3DDTO, PapeleriaPloteoDTO } from "../entities/categoriaMaquinaDto";
import { MaquinaImpresiones3D, PapeleriaPloteo } from "../models/categoriaMaquina";

export class CategoriaImpresion3DMapper extends Mapper<MaquinaImpresiones3DDTO, MaquinaImpresiones3D> {
    private mapperHelper : MapperHelper = new MapperHelper();

    override mapFrom(entity: MaquinaImpresiones3DDTO): MaquinaImpresiones3D {
        return {
            id:                     this.mapperHelper.numberMapFrom(entity.maquina_impresiones3d_id),
            arquitectura:           this.mapperHelper.stringMapFrom(entity.arquitectura),
            costeLuzPorHora:        this.mapperHelper.numberMapFrom(entity.coste_luzxhora),
            porcentajeDesperdicio:  this.mapperHelper.numberMapFrom(entity.porcentaje_desperdicio),
            tipoInyeccion:          this.mapperHelper.stringMapFrom(entity.tipo_inyeccion),
        }
    }
    override mapTo(model: MaquinaImpresiones3D): MaquinaImpresiones3DDTO {
        return {
            maquina_impresiones3d_id: this.mapperHelper.numberMapTo(model.id),
            arquitectura:            this.mapperHelper.stringMapTo(model.arquitectura),
            coste_luzxhora:          this.mapperHelper.numberMapTo(model.costeLuzPorHora),
            porcentaje_desperdicio:  this.mapperHelper.numberMapFrom(model.porcentajeDesperdicio),
            tipo_inyeccion:          this.mapperHelper.stringMapTo(model.tipoInyeccion),
        }
    }

}

export class CategoriaPloteoMapper extends Mapper<PapeleriaPloteoDTO, PapeleriaPloteo> {
    private mapperHelper : MapperHelper = new MapperHelper();

    override mapFrom(entity: PapeleriaPloteoDTO): PapeleriaPloteo {
        return {
            papeleriaPloteoId:  this.mapperHelper.numberMapFrom(entity.papeleria_ploteo_id),
            tipoTinta:          this.mapperHelper.stringMapFrom(entity.tipo_tinta),
        }
    }
    override mapTo(model: PapeleriaPloteo): PapeleriaPloteoDTO {
        return {
            papeleria_ploteo_id:    this.mapperHelper.numberMapTo(model.papeleriaPloteoId),
            tipo_tinta:             this.mapperHelper.stringMapTo(model.tipoTinta),
        }
    }

}