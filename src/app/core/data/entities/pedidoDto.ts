import { ModeloPredefinidoDTO } from "./modeloPredifindoDto";

export interface PedidoDTO {
  pedido_id?: number;
  url_modelo?: string;
  fecha_pedido?: string;
  fecha_validacion?: string;
  comentario?: string;
  estado?: string;
  codigo?: string;
  fecha_pago?: string;
  persona?: PersonaDTO | null;
  modelo_predefinido?: ModeloPredefinidoDTO | null;
}

export interface PagoDTO {
  pago_id?: number;
  fecha_pago?: string;
  monto?: number;
  metodo_pago?: string;
  estado_pago?: string;
  voucher?: string;
  pedido?: PedidoDTO | null;
}

export interface PersonaDTO {
  persona_id?: number;
	nombre?: string;
	apellido?: string;
	fecha_nacimiento?: Date;
	codigo?: string;
	email?: string;
}
