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
  img1: File = new File([],'');
  img2: File = new File([],'');
  img3: File = new File([],'');
  img4: File = new File([],'');
  
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

  private inizializateModelo() {
    return {
      nombre: '',
      codigo: '',
      comentario: '',
      estado: 'nuevo',
      precio: 0,
      imagen1: new File([],''),
      imagen2: new File([],''),
      imagen3: new File([],''),
      imagen4: new File([],''),
      insumo_id: 0,
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

    this.modeloPredefinido.insumo_id = value;
    this.modeloPredefinido.codigo = codigo;

    this.modeloPredefinido.imagen1 = this.img1;
    this.modeloPredefinido.imagen2 = this.img2;
    this.modeloPredefinido.imagen3 = this.img3;
    this.modeloPredefinido.imagen4 = this.img4;
    
    const formData = new FormData();
    

    // Añadir datos del modelo
    formData.append('nombre', this.modeloPredefinido.nombre);
    formData.append('comentario', this.modeloPredefinido.comentario);
    formData.append('precio', this.modeloPredefinido.precio.toString());
    formData.append('codigo', this.modeloPredefinido.codigo);
    formData.append('estado', this.modeloPredefinido.estado);
    formData.append('insumo_id', this.modeloPredefinido.insumo_id.toString());

    if (this.modeloPredefinido.imagen1 && this.modeloPredefinido.imagen1 instanceof File) {
      console.log("agregando img1")
      formData.append('imagen1', this.modeloPredefinido.imagen1);
    }
    if (this.modeloPredefinido.imagen2 && this.modeloPredefinido.imagen2 instanceof File) {
      formData.append('imagen2', this.modeloPredefinido.imagen2);
    }
    if (this.modeloPredefinido.imagen3 && this.modeloPredefinido.imagen3 instanceof File) {
      formData.append('imagen3', this.modeloPredefinido.imagen3);
    }
    if (this.modeloPredefinido.imagen4 && this.modeloPredefinido.imagen4 instanceof File) {
      formData.append('imagen4', this.modeloPredefinido.imagen4);
    }

    this.modeloPredefinidoSrv.saveModeloPredefinido(formData).subscribe({
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
