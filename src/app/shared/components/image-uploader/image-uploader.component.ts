import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadService } from '@core/index.service.http';
import { NotificationService } from '@core/index.service.trigger';

interface CloudinaryAsset {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string; // Formato ISO 8601
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  asset_folder: string;
  display_name: string;
  access_mode: string;
  original_filename: string;
}


@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class ImageUploaderComponent {
  @Input() isAddImage: boolean = false;
  @Input() sizeBox: string = '400px';
  @Input() urlImg: string = '';
  @Output() urlImgChange: EventEmitter<string> = new EventEmitter();
  image: string | ArrayBuffer = '';
  hovering: boolean = false;
  accept: string = 'image/*';

  allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  maxSize = 10 * 1024 * 1024;
  cloudinaryAsset: CloudinaryAsset | undefined;

  constructor(
    private notificationSrv: NotificationService,
    private uploaderSrv: UploadService,
  ) {}

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.hovering = true;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();

    if (!event.dataTransfer) {
      return;
    }

    this.hovering = false;
    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.hovering = false;
  }

  onFileSelect(event: any): void {
    if (event.target.files && event.target.files.length) {
      this.handleFile(event.target.files[0]);
    }
  }

  handleFile(file: File): void {
    if (!this.allowedTypes.includes(file.type)) {
      this.notificationSrv.addNotification('error', 'la imagen debe estar en formato PNG, JPG o JPEG.')
      this.image = '';
      return;
    }

    if (file.size > this.maxSize) {
      this.notificationSrv.addNotification('error', 'El archivo debe ser menor a 10MB.')
      this.image = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => (this.image = reader.result ?? '');
    reader.readAsDataURL(file);
    this.uploadImg(file);
  }

  private uploadImg(file: File) {
    const data  = new FormData();
    data.append('file',file);
    data.append('upload_preset','fatlab');
    data.append('cloud_name','djbqeqfj5');
    
    this.uploaderSrv.uploadImg(data).subscribe({
      next: (res: CloudinaryAsset) =>{
        this.cloudinaryAsset = res;
        this.urlImgChange.emit(res.url);
        this.notificationSrv.addNotification('success', 'Se subio la imagen correctamente');
      },
      error: (err) => {
        this.notificationSrv.addNotification('error', 'Error al subir imagen');
        console.log(err);
      }
    })
  }

  removeImage(event?: MouseEvent): void {
    if(event) event.stopPropagation();
    this.image = '';
    
    // if(!this.cloudinaryAsset) return;
    
    // const { public_id, signature } = this.cloudinaryAsset;
    
    // this.uploaderSrv.deleteImg(public_id, signature).subscribe({
    //   next: (res: CloudinaryAsset) =>{
    //     this.urlImgChange.emit("");
    //     this.notificationSrv.addNotification('success', 'Se elimino correctamente');
    //   },
    //   error: (err) => {
    //     this.notificationSrv.addNotification('error', 'Error al eliminar imagen');
    //     console.log(err);
    //   }
    // });
  }
}
