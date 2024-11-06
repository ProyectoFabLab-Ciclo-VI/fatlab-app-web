import { Component } from '@angular/core';
import { FloatLabelComponent } from '../../../shared/components/float-label/float-label.component';
import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component';

@Component({
  selector: 'app-edicion-insumo',
  templateUrl: './edicion-insumo.component.html',
  styleUrl: './edicion-insumo.component.css',
  standalone: true,
  imports: [FloatLabelComponent, CustomButtonComponent],
})
export class EdicionInsumoComponent {

}
