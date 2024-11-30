import { ModeloPredefinido } from "./modeloPredifinido";

export interface Pedido {
  id: number;
//   urlModelo: string;
  fechaPedido: string;
  fechaValidacion: string;
  comentario: string;
  estado: string;
  codigo: string;
  fechaPago: string;
  persona: Persona | null;
  modeloPredefinido: ModeloPredefinido | null;
}

export interface Pago {
  id: number;
  fechaPago: string;
  monto: number;
  metodoPago: string;
  estadoPago: string;
  voucher: string;
  pedido: Pedido | null;
}

export interface Persona {
    id: number;
	nombre: string;
	apellido: string;
	// fecha_nacimiento: Date;
	codigo: string;
	email: string;
}
