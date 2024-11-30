import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Insumo, ModeloPredefinido } from '@core/index.data.model';
import { SelectItem } from '@core/index.model.system';
import { InsumoService, InventarioService } from '@core/index.service.http';
import { NotificationService } from '@core/index.service.trigger';
import { ModeloPredefinidoService } from '@core/service/https/modelo-predefinido.service';
import { ImageUploaderComponent } from '@shared/components/image-uploader/image-uploader.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edicion-modelo-predefinido',
  templateUrl: './edicion-modelo-predefinido.component.html',
  styleUrl: './edicion-modelo-predefinido.component.css'
})
export class EdicionModeloPredefinidoComponent implements OnInit, OnDestroy {
  @ViewChildren(ImageUploaderComponent) imageUploaders!: QueryList<ImageUploaderComponent>  
  modeloPredefinido = this.inizializateModelo();
  
  categorias: SelectItem[] = [];
  insumos: SelectItem[] = [];
  
  insumoSelect: SelectItem = { value: 0, viewValue: '' };

  categoriaSub: Subscription = new Subscription();
  insumoSub: Subscription = new Subscription();

  constructor(
    private notificationSrv: NotificationService,
    private modeloPredefinidoSrv: ModeloPredefinidoService,
    private inventarioSrv: InventarioService,
  ) { }

  ngOnInit(): void {
    this.categoriaSub = this.inventarioSrv.getAllCategoriaInsumo().subscribe({
      next: (categoriasInsumo) => {
        for(let categoria of categoriasInsumo) {
          const { id, nombre } = categoria;
          this.categorias.push({ value: id, viewValue: nombre });
        }
      },
      error: (err) => {
        this.notificationSrv.addNotification('error', 'Error al obtener categorias');
      }
    });
  }

  ngOnDestroy(): void {
    if(this.categoriaSub) this.categoriaSub.unsubscribe();
    if(this.insumoSub) this.insumoSub.unsubscribe();
  }

  private inizializateModelo(): ModeloPredefinido {
    return {
      id: 0,
      nombre: '',
      codigo: '',
      comentario: '',
      // estado: 'nuevo',
      precio: 0,
      img1: '',
      img2: '',
      img3: '',
      img4: '',
      insumo: null,
    };
  }

  public definirInsumos(event: SelectItem) {
    this.insumoSub = this.inventarioSrv.getAllInsumoByIdCategoria(event.value).subscribe({
      next: (insumos) => {
        for(let insumo of insumos) {
          this.insumos = [];
          const { id, nombre } = insumo;
          this.insumos.push({ value: id, viewValue: nombre });
        }
        this.notificationSrv.addNotification('success', 'Insumos cargados');
      },
      error: (err) => {
        this.notificationSrv.addNotification('error', 'Error al obtener insumos');
      }
    });
  }

  public limpiar() {
    this.modeloPredefinido = this.inizializateModelo();
    this.imageUploaders.toArray().forEach((imageUploader) => {
      imageUploader.removeImage();
    });
  }

  public submit() {
    const { value } = this.insumoSelect;
    const codigo: string = new Date().getTime().toString();
    const insumo: Insumo = {
      id: value,
      nombre: '',
      descripcion: '',
      unidadMedida: '',
      marca: '',
      precioUnitario: 0,
      cantidadTotal: 0,
      costeInsumo: 0,
      categoriaInsumo: null,
      activo: false,
    }
    this.modeloPredefinido.insumo = insumo;
    this.modeloPredefinido.codigo = codigo;

    this.modeloPredefinidoSrv.saveModeloPredefinido(this.modeloPredefinido).subscribe({
      next: () => {
        this.notificationSrv.addNotification('success', 'Modelo predefinido guardado');
        this.limpiar();
      },
      error: (err) => {
        this.notificationSrv.addNotification('error', 'Error al guardar modelo predefinido');
      }
    })
  }
}
