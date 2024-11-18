import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from '../../../../../core/index.model.system';

import { CustomSelectComponent } from '../../../../../shared/components/custom-select/custom-select.component';
import { FormsModule } from '@angular/forms';
import { Maquina } from '../../../../../core/index.data.model';

@Component({
  selector: 'app-impresora',
  templateUrl: './impresora.component.html',
  styleUrl: './impresora.component.css',
  standalone: true,
  imports: [CustomSelectComponent, FormsModule],
})
export class ImpresoraComponent {
  impresion = {
    id: 0,
    costeLuzPorHora: 0,
    arquitectura: '',
    tipoInyeccion: '',
    porcentajeDesperdicio: 0,
  }

  maquina: Maquina = {
    id: 0,
    categoriaInsumo: null,
    estadoMaquina: null,
    isDelete: false,
    nombre: '',
    codigoUpeu: '',
    costeMaquina: 0,
    costeAmortizacion: 0,
    categoriaMaquina: {
      categoria: 'Impresiones 3D',
      maquina3D: this.impresion,
    }
  }

  @Output() maquinaChange: EventEmitter<Maquina> = new EventEmitter<Maquina>();

  estados: SelectItem[] = [
    { value: null, viewValue: 'Activo' },
    { value: null, viewValue: 'En mantenimiento' },
    { value: null, viewValue: 'Inactivo' },
  ];

  sendChange(){
    this.maquina.categoriaMaquina.maquina3D = this.impresion;
    this.maquinaChange.emit(this.maquina);
  }
}
