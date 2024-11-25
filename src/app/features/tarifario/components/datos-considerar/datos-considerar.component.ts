import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatoConsiderado } from '../../../../core/index.data.model';

@Component({
  selector: 'app-datos-considerar',
  templateUrl: './datos-considerar.component.html',
  styleUrl: './datos-considerar.component.css',
  standalone: true,
  imports: [FormsModule],
})
export class DatosConsiderarComponent implements OnChanges {
  @Input() unidadMedida: string = "g";
  @Input() datosConsiderado: DatoConsiderado = {
    porcentajeDesperdicioMaquina: 0,
    costoInsumo: 0,
    costoPorHoraElectricidad: 0,
    costoAmortizuacionPorHora: 0,
  }

  @Input() cantidadUsada: number = 0;
  desperdicioGenerado: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    const decimalDesperdicio = this.datosConsiderado.porcentajeDesperdicioMaquina / 100;
    this.desperdicioGenerado = this.cantidadUsada * decimalDesperdicio;
  }
}
