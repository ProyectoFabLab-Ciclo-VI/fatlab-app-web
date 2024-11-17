import { Component, Input } from '@angular/core';

import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';

import { DatoCalculadora } from '../../../../core/index.data.model';

@Component({
  selector: 'app-resultado-calculadora',
  templateUrl: './resultado-calculadora.component.html',
  styleUrl: './resultado-calculadora.component.css',
  standalone: true,
  imports: [CustomButtonComponent],
})
export class ResultadoCalculadoraComponent {
  @Input() calculadora: DatoCalculadora = {
    costoMateriales: 0,
    costoAmortizacion: 0,
    costoGanancia: 0,
    costoOperario: 0,
    costoFallo: 0,
    costoIgv: 0,
    costoTotal: 0,
  }

  public obtenerPorcentaje(mount: number) {
    const total = this.calculadora.costoTotal;
    
    if (total === 0) {
      return "0%";
    }
  
    const porcentaje = (mount * 100) / total;
    const resultadoPorcentaje = isNaN(porcentaje) ? 0 : porcentaje;
    const porcentajeRedondeado = resultadoPorcentaje.toFixed(2);
  
    return `${porcentajeRedondeado}%`;
  }
}
