import { Component } from '@angular/core';

import { FloatLabelComponent } from '../../../shared/components/float-label/float-label.component';
import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component';

import { InsumoService } from '../../../core/index.service.http';
import { NotificationService } from '../../../core/index.service.trigger';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Insumo } from '../../../core/index.data.model';

@Component({
  selector: 'app-edicion-insumo',
  templateUrl: './edicion-insumo.component.html',
  styleUrl: './edicion-insumo.component.css',
  standalone: true,
  imports: [FloatLabelComponent, CustomButtonComponent, ReactiveFormsModule],
})
export class EdicionInsumoComponent {
  insumoForm: FormGroup = this.initializateFormGroupInsumo();

  constructor(
    private insumoSrv: InsumoService,
    private notificationSrv: NotificationService,
  ) { }

  private initializateFormGroupInsumo() {
    return new FormGroup({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      unidadMedida: new FormControl(''),
    });
  }

  public onSumit() {
    const { nombre, descripcion, unidadMedida } = this.insumoForm.value;
    const insumo: Insumo = {
      id: 0,
      nombre: nombre,
      descripcion: descripcion,
      unidadMedida: unidadMedida,
      activo: false,
    };

    this.notificationSrv.addNotification('info', 'Guardando insumo...')

    this.insumoSrv.saveInsumo(insumo).subscribe({
      next: () => {
        this.notificationSrv.addNotification('success', 'Insumo guardado exitosamente');
        this.insumoForm = this.initializateFormGroupInsumo();
      },
      error: (err) => {
        this.notificationSrv.addNotification('error', 'Error del servidor')
        console.error(err);
      }
    });
  }
}
