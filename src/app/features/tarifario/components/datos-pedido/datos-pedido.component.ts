import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CustomSelectComponent } from '../../../../shared/components/custom-select/custom-select.component';

import { SelectItem } from '../../../../core/index.model.system';
import { DatoPedido } from '../../../../core/index.data.model';

@Component({
  selector: 'app-datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrl: './datos-pedido.component.css',
  standalone: true,
  imports: [CustomSelectComponent, FormsModule],
})
export class DatosPedidoComponent {
  roles: SelectItem[] = [
    { value: 1, viewValue: 'Arquitecto' },
    { value: 2, viewValue: 'Cliente externo' },
    { value: 3, viewValue: 'Upeu' },
  ];

  @Input() datosPedido: DatoPedido = {
    cantidadUsada: 0,
    tiempoImpresion: 0,
    porcentajeGanancia: 0,
    porcentajeTasaFallo: 0,
    costoOperador: 0,
    usarIgv: true,
  };

  @Output() datosPedidoChange = new EventEmitter<DatoPedido>();

  sendChange(useIgv?: boolean) {
    if(useIgv != undefined) this.datosPedido.usarIgv = useIgv;
    this.datosPedidoChange.emit(this.datosPedido);
  }
}
