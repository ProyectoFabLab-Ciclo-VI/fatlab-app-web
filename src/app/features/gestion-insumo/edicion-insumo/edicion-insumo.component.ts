import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { CustomSelectComponent } from '@shared/components/custom-select/custom-select.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

import { InsumoService, InventarioService } from '@core/index.service.http';
import { NotificationService } from '@core/index.service.trigger';
import { Insumo } from '@core/index.data.model';
import { SelectItem } from '@core/index.model.system';

@Component({
  selector: 'app-edicion-insumo',
  templateUrl: './edicion-insumo.component.html',
  styleUrl: './edicion-insumo.component.css',
  standalone: true,
  imports: [CustomButtonComponent, ReactiveFormsModule, CustomSelectComponent, LoaderComponent],
})
export class EdicionInsumoComponent implements OnInit, OnDestroy {
  isSend: boolean = false;
  insumoForm: FormGroup = this.initializateFormGroupInsumo();

  unidadesDeMedida: SelectItem[] = [
    { value: 'g', viewValue: 'Gramos' },
    { value: 'ml', viewValue: 'Mililitros' },
    { value: 'mm', viewValue: 'milimetros'},
  ];

  categoriaInsumoSub: Subscription = new Subscription();
  categorias: SelectItem[] = [];
  categoriaSeleccionada: SelectItem = { value: 0, viewValue: '' };

  marcas: SelectItem[] = [
    { value: 'fPolymaker', viewValue: 'Polymaker' },
    { value: 'eSUN', viewValue: 'eSUN' },
    { value: 'Hatchbox', viewValue: 'Hatchbox' },
    { value: 'Ultimaker', viewValue: 'Ultimaker' },
    { value: 'MatterHackers', viewValue: 'MatterHackers' },
    { value: 'Prusament', viewValue: 'Prusament' },
    { value: 'ColorFabb', viewValue: 'ColorFabb' },
    { value: 'Fillamentum', viewValue: 'Fillamentum' },
    { value: '3DXTech', viewValue: '3DXTech' },
    { value: 'AMOLEN', viewValue: 'AMOLEN' },
    { value: 'Overture', viewValue: 'Overture' },
  ];

  unidadMedidaSeleccionada: SelectItem = this.unidadesDeMedida[0];

  constructor(
    private insumoSrv: InsumoService,
    private notificationSrv: NotificationService,
    private inventarioSrv: InventarioService,
  ) { }

  ngOnInit(): void {
    this.inventarioSrv.getAllCategoriaInsumo().subscribe({
      next: (categoriasInsumo) => {
        for(let categoria of categoriasInsumo) {
          const { id, nombre } = categoria;
          this.categorias.push({ value: id, viewValue: nombre });
        }
      }
    });
  }

  ngOnDestroy(): void {
    if(this.categoriaInsumoSub) this.categoriaInsumoSub.unsubscribe();
  }

  private initializateFormGroupInsumo() {
    return new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      descripcion: new FormControl(''),
      unidadMedida: new FormControl(''),
      cantidadTotal: new FormControl(0,[Validators.required, Validators.min(0)]),
      costeInsumo: new FormControl(0,[Validators.required, Validators.min(0)]),
      precioUnitario: new FormControl(0,[Validators.required, Validators.min(0)]),
    });
  }

  public onSumit() {
    const { nombre, descripcion, cantidadTotal, costeInsumo, precioUnitario } = this.insumoForm.value;
    this.unidadMedidaSeleccionada.value;
    const insumo: Insumo = {
      id: 0,
      nombre: nombre,
      descripcion: descripcion,
      unidadMedida: this.unidadMedidaSeleccionada.value ?? '',
      cantidadTotal: cantidadTotal,
      costeInsumo: costeInsumo,
      marca: '',
      precioUnitario: precioUnitario,
      activo: false,
      categoriaInsumo: {
        id: this.categoriaSeleccionada.value ?? 0,
        nombre: ''
      },
    };
    this.isSend = true;
    this.notificationSrv.addNotification('info', 'Guardando insumo...')

    this.insumoSrv.saveInsumo(insumo).subscribe({
      next: () => {
        this.notificationSrv.addNotification('success', 'Insumo guardado exitosamente');
        this.isSend = false;
        this.insumoForm = this.initializateFormGroupInsumo();
      },
      error: (err) => {
        this.notificationSrv.addNotification('error', 'Error del servidor')
        this.isSend = false;
        console.error(err);
      }
    });
  }
}
