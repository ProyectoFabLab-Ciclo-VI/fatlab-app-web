import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FloatLabelComponent } from '../../../shared/components/float-label/float-label.component';
import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component';

import { SelectItem } from '../../../core/index.model.system';
import { MaquinaService } from '../../../core/index.service.http';
import { NotificationService } from '../../../core/index.service.trigger';
import { Maquina } from '../../../core/index.data.model';

@Component({
  selector: 'app-agregar-maquina',
  templateUrl: './agregar-maquina.component.html',
  styleUrl: './agregar-maquina.component.css',
  standalone: true,
  imports: [FloatLabelComponent, CustomButtonComponent, ReactiveFormsModule],
})
export class AgregarMaquinaComponent {
  maquinaForm: FormGroup = this.initializateFormGroupMaquina()

  tipoMaquina: SelectItem[] = [
    { value: 1, viewValue: 'Ploteo' },
    { value: 2, viewValue: 'Corte laser' },
    { value: 3, viewValue: 'Impresora' },
    { value: 4, viewValue: 'Modelado' },
  ];

  estadoMaquina: SelectItem[] = [
    { value: 1, viewValue: 'Activo' },
    { value: 2, viewValue: 'En mantenimiento' },
    { value: 3, viewValue: 'Inactivo' },
  ];

  constructor(
    private maquinaSrv: MaquinaService,
    private notificationSrv: NotificationService,
  ) { }

  private initializateFormGroupMaquina() {
    return new FormGroup({
      nombre: new FormControl(''),
      codigo: new FormControl(''),
    });
  }

  public onSubmit() {
    const { nombre, codigo } = this.maquinaForm.value;
    const maquina: Maquina = {
      id: 0,
      nombre: nombre,
      codigoUpeu: codigo,
      isDelete: false,
    }

    this.notificationSrv.addNotification('info', 'Guardando maquina...')

    this.maquinaSrv.saveMaquina(maquina).subscribe({
      next: () => {
        this.notificationSrv.addNotification('success', 'Maquina guardada exitosamente');
        this.maquinaForm = this.initializateFormGroupMaquina();
      },
      error: (err) => {
        this.notificationSrv.addNotification('error', 'Error del servidor')
        console.error(err);
      }
    });
  }
}
