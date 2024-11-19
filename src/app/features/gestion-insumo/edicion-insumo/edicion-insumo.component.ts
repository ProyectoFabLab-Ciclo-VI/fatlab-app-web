import { Component, OnDestroy, OnInit } from '@angular/core';

import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component';
import { CustomSelectComponent } from '../../../shared/components/custom-select/custom-select.component';

import { InsumoService } from '../../../core/index.service.http';
import { NotificationService } from '../../../core/index.service.trigger';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Insumo } from '../../../core/index.data.model';
import { SelectItem } from '../../../core/index.model.system';
import { InventarioService } from '../../../core/service/https/inventario.service';
import { Subscription } from 'rxjs';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';

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
  categoriaSeleccionada!: SelectItem;

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
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      unidadMedida: new FormControl(''),
      cantidadTotal: new FormControl(0),
      costeInsumo: new FormControl(0),
      precioUnitario: new FormControl(0),
    });
  }

  public onSumit() {
    const { nombre, descripcion, unidadMedida, cantidadTotal, costeInsumo, precioUnitario } = this.insumoForm.value;
    const insumo: Insumo = {
      id: 0,
      nombre: nombre,
      descripcion: descripcion,
      unidadMedida: unidadMedida,
      cantidadTotal: cantidadTotal,
      costeInsumo: costeInsumo,
      marca: '',
      precioUnitario: precioUnitario,
      activo: false,
      categoriaInsumo: {
        id: this.categoriaSeleccionada.value,
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
