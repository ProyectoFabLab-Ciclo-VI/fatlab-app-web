import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FloatLabelComponent } from '../../../shared/components/float-label/float-label.component';
import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component';

import { SelectItem } from '../../../core/index.model.system';
import { MaquinaService } from '../../../core/index.service.http';
import { Maquina } from '../../../core/index.data.model';

@Component({
  selector: 'app-agregar-maquina',
  templateUrl: './agregar-maquina.component.html',
  styleUrl: './agregar-maquina.component.css',
  standalone: true,
  imports: [FloatLabelComponent, CustomButtonComponent, ReactiveFormsModule],
})
export class AgregarMaquinaComponent {
  maquinaForm: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    codigo: new FormControl(''),
  })

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
  ) { }

  public onSubmit() {
    const { nombre, codigo } = this.maquinaForm.value;
    const maquina: Maquina = {
      id: 0,
      nombre: nombre,
      codigoUpeu: codigo,
      isDelete: false,
    }

    this.maquinaSrv.saveMaquina(maquina).subscribe({
      next: () => {
        alert("maquina guardada");
      },
      error: (err) => {
        alert("error al guardar maquina");
        console.error(err);
      }
    });
  }
}
