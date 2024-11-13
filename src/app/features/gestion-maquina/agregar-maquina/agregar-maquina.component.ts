import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FloatLabelComponent } from '../../../shared/components/float-label/float-label.component';
import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component';

import { SelectItem } from '../../../core/index.model.system';
import { MaquinaService } from '../../../core/index.service.http';
import { ModalService, NotificationService } from '../../../core/index.service.trigger';
import { Maquina } from '../../../core/index.data.model';
import { CustomSelectComponent } from '../../../shared/components/custom-select/custom-select.component';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { ImpresoraComponent } from "./components/impresora/impresora.component";
import { PapeleriaComponent } from './components/papeleria/papeleria.component';
import { LaserComponent } from './components/laser/laser.component';
import { EscaneoComponent } from './components/escaneo/escaneo.component';

@Component({
  selector: 'app-agregar-maquina',
  templateUrl: './agregar-maquina.component.html',
  styleUrl: './agregar-maquina.component.css',
  standalone: true,
  imports: [
    FloatLabelComponent,
    CustomButtonComponent,
    ReactiveFormsModule,
    CustomSelectComponent,
    LoaderComponent,
    ImpresoraComponent,
    PapeleriaComponent,
    LaserComponent,
    EscaneoComponent,
  ],
})
export class AgregarMaquinaComponent {
  
  isSend: boolean = false;
  maquinaForm: FormGroup = this.initializateFormGroupMaquina();

  categorias: SelectItem[] = [
    { value: 1, viewValue: 'Impresiones 3D' },
    { value: 2, viewValue: 'Papelería / Ploteo' },
    { value: 3, viewValue: 'Laser 3D' },
    { value: 4, viewValue: 'Escaneo 3D' },
  ];

  maquinaSelected = this.categorias[0];

  constructor(
    private maquinaSrv: MaquinaService,
    private notificationSrv: NotificationService,
    private modalSrv: ModalService,
  ) { }

  private initializateFormGroupMaquina() {
    return new FormGroup({
      nombre: new FormControl<string>(''),
      codigo: new FormControl<string>(''),
    });
  }

  public cancel(){
    this.modalSrv.closeModal();
  }

  public onSubmit() {
    const { nombre, codigo } = this.maquinaForm.value;
    const maquina: Maquina = {
      id: 0,
      nombre: nombre,
      codigoUpeu: codigo,
      isDelete: false,
    }
    this.isSend = true;
    this.notificationSrv.addNotification('info', 'Guardando maquina...')

    this.maquinaSrv.saveMaquina(maquina).subscribe({
      next: () => {
        this.notificationSrv.addNotification('success', 'Maquina guardada exitosamente');
        this.maquinaForm = this.initializateFormGroupMaquina();
        this.isSend = false;
      },
      error: (err) => {
        this.notificationSrv.addNotification('error', 'Error del servidor')
        this.isSend = false;
        console.error(err);
      }
    });
  }
}
