import { MapperHelper } from "@core/index.helper";
import { Mapper } from "../base/mapper";
import { PagoDTO, PedidoDTO, PersonaDTO } from "../entities/pedidoDto";
import { Pago, Pedido, Persona } from "../models/pedido";
import { ModeloPredefinidoMapper } from "./modeloPredifinidoMapper";

export class PedidoMapper extends Mapper<PedidoDTO, Pedido> {
    private mapperHelper: MapperHelper = new MapperHelper();
    private personaMapper: PersonaMapper = new PersonaMapper();
    private modeloPredefinidoMapper: ModeloPredefinidoMapper = new ModeloPredefinidoMapper();

    override mapFrom(entity: PedidoDTO): Pedido {
        return {
            id: this.mapperHelper.numberMapFrom(entity.pedido_id),
            codigo: this.mapperHelper.stringMapFrom(entity.codigo),
            comentario: this.mapperHelper.stringMapFrom(entity.comentario),
            estado: this.mapperHelper.stringMapFrom(entity.estado),
            fechaPago: this.mapperHelper.stringMapFrom(entity.fecha_pago),
            fechaPedido: this.mapperHelper.stringMapFrom(entity.fecha_pedido),
            fechaValidacion: this.mapperHelper.stringMapFrom(entity.fecha_validacion),
            modeloPredefinido: this.mapperHelper.objectMapFrom(entity.modelo_predefinido, this.modeloPredefinidoMapper),
            persona: this.mapperHelper.objectMapFrom(entity.persona, this.personaMapper),
        };
    }
    override mapTo(model: Pedido): PedidoDTO {
        return {
            pedido_id: this.mapperHelper.numberMapTo(model.id),
            codigo: this.mapperHelper.stringMapTo(model.codigo),
            comentario: this.mapperHelper.stringMapTo(model.comentario),
            estado: this.mapperHelper.stringMapTo(model.estado),
            fecha_pago: this.mapperHelper.stringMapTo(model.fechaPago),
            fecha_pedido: this.mapperHelper.stringMapTo(model.fechaPedido),
            fecha_validacion: this.mapperHelper.stringMapTo(model.fechaValidacion),
            modelo_predefinido: this.mapperHelper.objectMapTo(model.modeloPredefinido, this.modeloPredefinidoMapper),
            persona: this.mapperHelper.objectMapTo(model.persona, this.personaMapper),
        };
    }
}

export class PersonaMapper extends Mapper<PersonaDTO, Persona> {
    private mapperHelper: MapperHelper = new MapperHelper();

    override mapFrom(entity: PersonaDTO): Persona {
        return {
            id: this.mapperHelper.numberMapFrom(entity.persona_id),
            apellido: this.mapperHelper.stringMapFrom(entity.apellido),
            codigo: this.mapperHelper.stringMapFrom(entity.codigo),
            email: this.mapperHelper.stringMapFrom(entity.email),
            nombre: this.mapperHelper.stringMapFrom(entity.nombre),
        };
    }
    override mapTo(model: Persona): PersonaDTO {
        return {
            persona_id: this.mapperHelper.numberMapTo(model.id),
            apellido: this.mapperHelper.stringMapTo(model.apellido),
            codigo: this.mapperHelper.stringMapTo(model.codigo),
            email: this.mapperHelper.stringMapTo(model.email),
            nombre: this.mapperHelper.stringMapTo(model.nombre),
        };
    }
}

export class PagoMapper extends Mapper<PagoDTO, Pago> {
    private mapperHelper: MapperHelper = new MapperHelper();
    private pedidoMapper: PedidoMapper = new PedidoMapper();

    override mapFrom(entity: PagoDTO): Pago {
        return {
            id: this.mapperHelper.numberMapFrom(entity.pago_id),
            estadoPago: this.mapperHelper.stringMapFrom(entity.estado_pago),
            fechaPago: this.mapperHelper.stringMapFrom(entity.fecha_pago),
            metodoPago: this.mapperHelper.stringMapFrom(entity.metodo_pago),
            monto: this.mapperHelper.numberMapFrom(entity.monto),
            pedido: this.mapperHelper.objectMapFrom(entity.pedido, this.pedidoMapper),
            voucher: this.mapperHelper.stringMapFrom(entity.voucher),
        };
    }
    override mapTo(model: Pago): PagoDTO {
        return {
            pago_id: this.mapperHelper.numberMapTo(model.id),
            estado_pago: this.mapperHelper.stringMapTo(model.estadoPago),
            fecha_pago: this.mapperHelper.stringMapTo(model.fechaPago),
            metodo_pago: this.mapperHelper.stringMapTo(model.metodoPago),
            monto: this.mapperHelper.numberMapTo(model.monto),
            pedido: this.mapperHelper.objectMapTo(model.pedido, this.pedidoMapper),
            voucher: this.mapperHelper.stringMapTo(model.voucher),
        };
    }
}
