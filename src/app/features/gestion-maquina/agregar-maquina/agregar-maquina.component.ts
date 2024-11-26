import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ImpresoraComponent } from "./components/impresora/impresora.component";
import { PapeleriaComponent } from './components/papeleria/papeleria.component';
import { LaserComponent } from './components/laser/laser.component';
import { EscaneoComponent } from './components/escaneo/escaneo.component';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { CustomSelectComponent } from '@shared/components/custom-select/custom-select.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

import { SelectItem } from '@core/index.model.system';
import { InventarioService, MaquinaService } from '@core/index.service.http';
import { ModalService, NotificationService } from '@core/index.service.trigger';
import { Maquina, MaquinaImpresiones3D } from '@core/index.data.model';

@Component({
  selector: 'app-agregar-maquina',
  templateUrl: './agregar-maquina.component.html',
  styleUrl: './agregar-maquina.component.css',
  standalone: true,
  imports: [
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
export class AgregarMaquinaComponent implements OnInit, OnDestroy {
  
  isSend: boolean = false;
  maquinaForm: FormGroup = this.initializateFormGroupMaquina();
  impresora3dForm: FormGroup = this.initializateFormGroupImpresion3d();

  categorias: SelectItem[] = [
    { value: 1, viewValue: 'Impresiones 3D' },
    { value: 2, viewValue: 'Papelería / Ploteo' },
    { value: 3, viewValue: 'Laser 3D' },
    { value: 4, viewValue: 'Escaneo 3D' },
  ];

  categoriasInsumoSub: Subscription = new Subscription();
  categoriasInsumo: SelectItem[] = [];
  categoriasInsumoSeleccionada!: SelectItem;
  
  estados: SelectItem[] = [
    { value: 1, viewValue: 'Activo' },
    { value: 2, viewValue: 'En mantenimiento' },
    { value: 3, viewValue: 'Inactivo' },
  ];

  maquinaSelected = this.categorias[0];

  constructor(
    private maquinaSrv: MaquinaService,
    private notificationSrv: NotificationService,
    private modalSrv: ModalService,
    private inventarioSrv: InventarioService,
  ) { }

  ngOnInit(): void {
    this.inventarioSrv.getAllCategoriaInsumo().subscribe({
      next: (categoriasInsumo) => {
        for(let categoria of categoriasInsumo) {
          const { id, nombre } = categoria;
          this.categoriasInsumo.push({ value: id, viewValue: nombre });
        }
      }
    });
  }

  ngOnDestroy(): void {
    if(this.categoriasInsumoSub) this.categoriasInsumoSub.unsubscribe();
  }

  private initializateFormGroupMaquina() {
    return new FormGroup({
      nombre: new FormControl<string>(''),
      codigo: new FormControl<string>(''),
    });
  }

  private initializateFormGroupImpresion3d() {
    return new FormGroup({
      codigoUpeu: new FormControl('', [Validators.required]),
      costeLuzPorHora: new FormControl(0, [Validators.required, Validators.min(0)]),
      tipoInyeccion: new FormControl('', Validators.required),
      porcentajeDesperdicio: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      arquitectura: new FormControl('', Validators.required),
      costeMaquina: new FormControl(0, [Validators.required, Validators.min(0)]),
      costeAmortizacion: new FormControl(0, [Validators.required, Validators.min(0)]),
      estadoMaquina: new FormControl(''),
    });
  }

  public cancel(){
    this.modalSrv.closeModal();
  }

  public onSubmit() {
    const { nombre, codigo } = this.maquinaForm.value;
    const { value } = this.categoriasInsumoSeleccionada;
    const { costeAmortizacion, costeMaquina, costeLuzPorHora, arquitectura, porcentajeDesperdicio, tipoInyeccion } = this.maquinaForm.value;
    
    const impresora3d: MaquinaImpresiones3D = {
      id: 0,
      arquitectura: arquitectura,
      costeLuzPorHora: costeLuzPorHora,
      porcentajeDesperdicio: porcentajeDesperdicio,
      tipoInyeccion: tipoInyeccion,
    }
    
    const maquina: Maquina = {
      id: 0,
      nombre: nombre,
      codigoUpeu: codigo,
      categoriaInsumo: {
        id: value,
        nombre: ''
      },
      costeAmortizacion: costeAmortizacion,
      costeMaquina: costeMaquina,
      categoriaMaquina: {
        categoria: 'Impresiones 3D',
        maquina3D: impresora3d,
      },
      estadoMaquina: null,
      isDelete: false,
    }
    
    this.isSend = true;
    this.notificationSrv.addNotification('info', 'Guardando maquina...')

    this.maquinaSrv.saveMaquina(maquina).subscribe({
      next: () => {
        this.notificationSrv.addNotification('success', 'Maquina guardada exitosamente');
        this.maquinaForm = this.initializateFormGroupMaquina();
        this.impresora3dForm = this.initializateFormGroupImpresion3d();
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
